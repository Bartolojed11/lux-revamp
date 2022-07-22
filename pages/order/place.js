import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useSession } from "next-auth/react"

// Components
import MobileDetailTab from '../../components/MobileDetailTab'
import PurchaseCard from '../../components/PurchaseCard'
import PaymentCard from '../../components/PaymentCard'
import PaymentDetailsCard from '../../components/PaymentDetailsCard'

// utils
import { toastSuccess, toastError } from "../../utils/toasts"

// Icons
import { IoLocationSharp } from "react-icons/io5";

const PlaceOrder = () => {
    const [selectedProducts, setSelectedProducts] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)

    const { data: session, status } = useSession()
    let token = {}

    if (status === 'authenticated') {
        token = session.user.accessToken
    }

    const router = useRouter()
    

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const products = JSON.parse(localStorage.getItem('selected_products'))
            if (products !== null) {
                setSelectedProducts(products)
                let amount = 0
                products.forEach(product => {
                    amount += product.total_amount
                })
                setTotalAmount(amount)
            }
        }
    }, [])


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

    function placeOrder(selectedProducts, token, router) {

        const url = process.env.apiExternalRoute + 'orders'

        const order = {
            "ordered_items": selectedProducts,
            "notes": '',
            "delivery_address": {
                "address": 'address',
                "region": '62d019d5da5e660674c72fe2',
                "province": '62d01a48da5e660674c72fe9',
                "city": '62d01a48da5e660674c72fe9'
            }
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token

            },
            body: JSON.stringify(order)
        }

        fetch(url, requestOptions)
            .then(response => response.json())
            .then((response) => {
                if (response.status === 'success') {
                    toastSuccess(response.message)
                    router.push('/order/success')
                } else {
                    toastError(response.message)
                }
            })

    }

    return (
        <div className='place-order__wrapper'>
            <Head>
                <title>Place order</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <MobileDetailTab header="Checkout Order" />
            <DeliveryAddress />
            <div className='container-fluid'>
                <PurchaseCard header={{ title: 'Order details' }}
                    items={[...selectedProducts]}
                    totalAmount={totalAmount}
                />


                <PaymentCard />
                <PaymentDetailsCard totalAmount={totalAmount} />
            </div>

            <div className='place-order-footer'>
                <div className='place-order-footer__total-wrapper'>
                    <div>Total</div>
                    <div className='totalPrice'>P{totalAmount}</div>
                </div>
                <button type="button" onClick={() => placeOrder(selectedProducts, token, router)} className='btn-shop-primary btn-checkout'>Place Order</button>
            </div>
        </div>
    )
}


export default PlaceOrder
