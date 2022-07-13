import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import Head from 'next/head'

// Components
import MobileDetailTab from '../../components/MobileDetailTab'
import PurchaseCard from '../../components/PurchaseCard'
import PaymentCard from '../../components/PaymentCard'
import PaymentDetailsCard from '../../components/PaymentDetailsCard'
import Footer from './../../components/Footer'

// icons
import { BsCheckCircle } from "react-icons/bs"

import shoes from './../../public/images/products/shoes-item.png'

// Icons
import { IoLocationSharp } from "react-icons/io5";

const Success = () => {
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
            <Head>
                <title>Successful Order</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <MobileDetailTab header="Successful Order" />

            <div className='container-fluid success-order-container'>
                <OrderStatus />
                <PurchaseCard header={{ title: 'Reference number', value: 'H129PP19745BCG' }}

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

            </div>

            <Footer />
        </div>
    )
}


export default Success
