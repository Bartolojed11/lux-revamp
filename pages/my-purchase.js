import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSession } from "next-auth/react"
import Head from 'next/head'

import { Form } from "react-bootstrap"
import { Search } from "react-bootstrap-icons"

// Components
import MobileDetailTab from './../components/MobileDetailTab'
import PurchaseCard from './../components/PurchaseCard'
import Footer from './../components/Footer'

import shoes from './../public/images/products/shoes-item.png'

const MyPurchase = () => {

    const [orderKeyword, setorderKeyword] = useState('')
    const [myOrders, setMyOrders] = useState([])
    const [fetchTriggered, setFetchTriggered] = useState(false)

    const { data: session, status } = useSession()
    const [token, setToken] = useState()

    const url = process.env.apiExternalRoute + 'orders/user'


    useEffect(() => {
        if (status === 'authenticated') {
            setToken(session.user.accessToken)
        }

        if (token !== undefined && !fetchTriggered) {
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }

            }

            fetch(url, requestOptions)
                .then(response => response.json())
                .then((response) => {
                    setFetchTriggered(true)
                    setMyOrders(response.data.orders)
                })
        }

    }, [status, token])

    function searchOrder(event) {
        event.preventDefault()

    }

    function handleInput(event) {
        setorderKeyword(() => event.target.value)
    }

    function PurchaseHeader() {
        return <>
            <Head>
                <title>My Purchases</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className='purchase-header'>
                <div className="search-wrapper">
                    <Form action="/search/" method="get" onSubmit={searchOrder}>
                        <Form.Control
                            type="text"
                            placeholder="Search by Reference no. or product"
                            className="purchase-search"
                            onChange={handleInput}
                            value={orderKeyword}
                        />
                        <div className="search-icon">
                            <button type="submit" className="btn-crystal p-0">
                                <Search />
                            </button>
                        </div>
                    </Form>
                </div>

                <div className="purchase-navigations">
                    <button type="button" className="btn btn-crystal pn-active">To Pay</button>
                    <button type="button" className="btn btn-crystal">To Ship</button>
                    <button type="button" className="btn btn-crystal">To Receive</button>
                    <button type="button" className="btn btn-crystal">Completed</button>
                </div>
            </div>
        </>
    }





    return (
        <div className='my-purchase-page'>
            <MobileDetailTab header="My Purchases" />
            <PurchaseHeader page="my-purchase" />
            <div className='container-fluid'>
                {
                    myOrders !== undefined && myOrders.map((order) => {
                        return <>
                            <PurchaseCard header={
                                {
                                    title: 'Reference no.',
                                    value: order.ref_num
                                }
                            }

                                items={[...order.ordered_items]}

                                totalAmount={order.total_amount}

                            />
                            <div className="flex just-between date-ordered-info">
                                <span>Date Ordered</span>
                                <span><i>Jan 21, 2022</i></span>
                            </div>
                        </>
                    })
                }


            </div>

            <Footer />
        </div>
    )
}


export default MyPurchase
