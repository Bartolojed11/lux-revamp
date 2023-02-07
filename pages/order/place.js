import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Components
import MobileDetailTab from './../../components/MobileDetailTab'
import PurchaseCard from './../../components/PurchaseCard'
import PaymentCard from './../../components/PaymentCard'
import PaymentDetailsCard from './../../components/PaymentDetailsCard'
import HtmlHeader from './../../components/Header'

// Icons
import { IoLocationSharp } from "react-icons/io5";

// hooks
import { useAuth } from './../../hooks/useAuth'
import { useToast } from './../../hooks/useToast'

// http
import { purchase } from './../../http/orders'

// utils
import { formatAddress } from './../../utils/textFormatter'


const PlaceOrder = () => {
    const [selectedProducts, setSelectedProducts] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const { toastSuccess, toastError } = useToast();
    const { token } = useAuth()
    const router = useRouter()
    const [shippingAddress, setShippingAddress] = useState({
        ...JSON.parse(localStorage.getItem('default_shipping_address'))
    })

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

    function DeliveryAddress(props) {
        return (
            <div className="delivery-address">
                <div className="delivery-address__header">
                    <span className="font-600 vertical-center"><IoLocationSharp className='font-red' />Delivery Address</span>
                    <Link href="/my-address/select" className='font-underline font-14'>Change Address</Link>
                </div>
                <div className='font-14'>{formatAddress(props.shippingAddress)}</div>
            </div>
        )
    }

    function placeOrder(params) {
        const {selectedProducts, token, router, shippingAddress} = params
        const order = {
            "ordered_items": selectedProducts,
            "notes": '',
            "delivery_address": {
                ...shippingAddress
            },
            "token": token
        }

        purchase(order)
            .then((orderReponse) => {
                if (orderReponse.status === 'success') {
                    toastSuccess(orderReponse.message)
                    localStorage.removeItem('selected_products');
                    router.push(`/order/success?ref=${orderReponse.data.order.ref_num}`)
                } else {
                    toastError(orderReponse.message)
                }
            })
    }

    return (
        <div className='place-order__wrapper'>
            <HtmlHeader title='Place order' />
            <MobileDetailTab header="Checkout Order" />
            <DeliveryAddress shippingAddress={shippingAddress} />
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
                <button type="button" onClick={() => placeOrder({
                    selectedProducts, shippingAddress, token, router
                })} className='btn-shop-primary btn-checkout'>Place Order</button>
            </div>
        </div>
    )
}

export default PlaceOrder
