import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"

// Components
import MobileDetailTab from './../../../components/MobileDetailTab'
import PurchaseCard from './../../../components/PurchaseCard'
import Footer from './../../../components/Footer'
import HtmlHeader from './../../../components/Header'

// icons
import { BsCheckCircle } from "react-icons/bs"

import shoes from './../../../public/images/products/shoes-item.png'

// utils
import { requestOptions } from "../../../utils/requestOptions"


const Success = () => {
    const router = useRouter()
    const { ref } = router.query

    const [myOrders, setMyOrders] = useState([])
    const [fetchTriggered, setFetchTriggered] = useState(false)
    const { data: session, status } = useSession()
    const [token, setToken] = useState()


    useEffect(function () {
        if (status === 'authenticated') {
            setToken(session.user.accessToken)
        }

        if (token !== undefined && ref !== undefined && !fetchTriggered) {

            fetch(process.env.apiUrl + 'orders/' + ref, requestOptions('GET', {}, { token: token }))
                .then(response => response.json())
                .then((response) => {
                    setFetchTriggered(true)
                    if (response.data.order === null || response.data === null) {
                        // TODO: 404 page
                    } else {
                        setMyOrders(response.data.order)

                    }

                })
        }

    }, [ref, token, status, fetchTriggered])



    function OrderStatus() {
        return <div className="order-status__wrapper">
            <div className="order-status__icon">
                <BsCheckCircle />
            </div>
            <div className="order-status__message font-price">
                ORDER PLACED SUCCESSFULLY
            </div>
        </div>
    }

    return (
        <div className='success-order__wrapper'>
            <HtmlHeader title='Successful Order' />
            <MobileDetailTab header="Successful Order" />

            <div className='container-fluid success-order-container'>
                <OrderStatus />
                {
                    myOrders.ordered_items !== undefined && <PurchaseCard header={{ title: 'Reference number', value: ref }}
                        items={[...myOrders.ordered_items]}
                        totalAmount={myOrders.total_amount}
                    />
                }


            </div>

            <Footer />
        </div>
    )
}


export default Success