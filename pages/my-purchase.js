import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

import { Form } from "react-bootstrap"
import { Search } from "react-bootstrap-icons"

// Components
import MobileDetailTab from './../components/MobileDetailTab'
import PurchaseCard from './../components/PurchaseCard'
import Footer from './../components/Footer'

import shoes from './../public/images/products/shoes-item.png'

const MyPurchase = () => {

    const [orderKeyword, setorderKeyword] = useState('')

    function searchOrder(event) {
        event.preventDefault()

    }

    function handleInput(event) {
        setorderKeyword(() => event.target.value)
    }

    function PurchaseHeader() {
        return <>
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
                <PurchaseCard header={
                    {
                        title: 'Reference no.',
                        value: 'NJ1873KAS2K'
                    }
                }

                    items={[{
                        slug: 'test',
                        image: shoes,
                        name: 'Snickers 1',
                        quantity: 3,
                        price: 100
                    },
                    {
                        slug: 'test-2',
                        image: shoes,
                        name: 'Snickers 1',
                        quantity: 3,
                        price: 100
                    }]}

                />
                <div className="flex just-between date-ordered-info">
                    <span>Date Ordered</span>
                    <span><i>Jan 21, 2022</i></span>
                </div>
            </div>

            <Footer />
        </div>
    )
}


export default MyPurchase
