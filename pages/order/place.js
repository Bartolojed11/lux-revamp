import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import Head from 'next/head'

// Components
import MobileDetailTab from '../../components/MobileDetailTab'
import PurchaseCard from '../../components/PurchaseCard'
import PaymentCard from '../../components/PaymentCard'
import PaymentDetailsCard from '../../components/PaymentDetailsCard'

import shoes from './../../public/images/products/shoes-item.png'

// Icons
import { IoLocationSharp } from "react-icons/io5";

const PlaceOrder = () => {

    function DeliveryAddress() {
        return (
            <div className="delivery-address">
                <div className="delivery-address__header">
                    <span className="font-600 vertical-center"><IoLocationSharp className='font-red' />Delivery Address</span>
                    <Link href="/my-address/select"><a className='font-underline font-14'>Change Address</a></Link>
                </div>
                <div className='font-14'>Lorem, Ipsum, Dolor City, Negros Occidental, Lorem Ipsum</div>
            </div>
        )
    }

    function PlaceOrderFooter() {

        return (
            <div className='place-order-footer'>

                <Head>
                    <title>Place order</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>

                <div className='place-order-footer__total-wrapper'>
                    <div>Total</div>
                    <div className='totalPrice'>P100</div>
                </div>
                <button type="button" className='btn-shop-primary btn-checkout'>Place Order</button>
            </div>
        )
    }

    return (
        <div className='place-order__wrapper'>
            <MobileDetailTab header="Checkout Order" />
            <DeliveryAddress />
            <div className='container-fluid'>
                <PurchaseCard header={{ title: 'Order details' }}

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
                <PaymentCard />
                <PaymentDetailsCard />
            </div>

            <PlaceOrderFooter />
        </div>
    )
}


export default PlaceOrder
