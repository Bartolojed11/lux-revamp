import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// Components
import MobileDetailTab from './../../../components/MobileDetailTab'
import PurchaseCard from './../../../components/PurchaseCard'
import Footer from './../../../components/Footer'
import HtmlHeader from './../../../components/Header'

// icons
import { BsCheckCircle } from 'react-icons/bs'

import shoes from './../../../public/images/products/shoes-item.png'

// hooks
import { useAuth } from './../../../hooks/useAuth'
import { useToast } from './../../../hooks/useToast'

// Http
import { getOrderByRef } from './../../../http/orders'

const Success = () => {
    const router = useRouter()
    const { ref } = router.query

    const { toastError } = useToast()

    const [myOrders, setMyOrders] = useState([])
    const [fetchTriggered, setFetchTriggered] = useState(false)
    const { token } = useAuth()

    useEffect(
        function () {
            if (token && ref && !fetchTriggered) {
                getOrderByRef({ token, ref }).then((orderInfo) => {
                    setFetchTriggered(true)
                    if (orderInfo) {
                        setMyOrders(orderInfo)
                    } else {
                        toastError('Order not found')
                    }
                })
            }
        },
        [ref, token, fetchTriggered]
    )

    function OrderStatus() {
        return (
            <div className="order-status__wrapper">
                <div className="order-status__icon">
                    <BsCheckCircle />
                </div>
                <div className="order-status__message font-price">
                    ORDER PLACED SUCCESSFULLY
                </div>
            </div>
        )
    }

    return (
        <div className="success-order__wrapper">
            <HtmlHeader title="Successful Order" />
            <MobileDetailTab header="Successful Order" />

            <div className="container-fluid success-order-container">
                <OrderStatus />
                {myOrders.ordered_items !== undefined && (
                    <PurchaseCard
                        header={{ title: 'Reference number', value: ref }}
                        items={[...myOrders.ordered_items]}
                        totalAmount={myOrders.total_amount}
                    />
                )}
            </div>

            <Footer />
        </div>
    )
}

export default Success
