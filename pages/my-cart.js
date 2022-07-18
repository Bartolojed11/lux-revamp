import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { useSession } from "next-auth/react"

import { useState } from 'react'

import CartItem from '../components/CartItem'
import MobileDetailTab from '../components/MobileDetailTab'
import { useEffect } from 'react'


const CartPage = () => {
    let [myCartItems, setMyCartItems] = useState([])
    

    let [fetchTriggered, setFetchTriggered] = useState(false)
    
    let [selectedProducts, setSelectedProducts] = useState([])
    let [selectedTotalAmount, setSelectedTotalAmount] = useState(0)

    const { data: session, status } = useSession()
    const url = process.env.apiExternalRoute + 'cart'
    let token = {}

    useEffect(() => {
        if (status === 'authenticated' && ! fetchTriggered) {
            token = session.user.accessToken

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
                    setMyCartItems(response.data.user_cart.cart_items)
                })
        }
        
    }, [token])

    function CartFooter({totalAmount, totalItemsSelected}) {
        const router = useRouter()

        return (
            <div className='cart-footer'>
                <div className='cart-footer__total-wrapper'>
                    <div>Total</div>
                    <div className='total-order-price'>P{totalAmount || 0}</div>
                </div>
                <button type="button" onClick={() => router.push("order/place")} className='btn-shop-primary btn-checkout'>Checkout (<span>{totalItemsSelected}</span>)</button>
            </div>
        )
    }

    function CartHeader() {
        return <>
            <div className='cart-header'>
                <div className='cart-navigations'>
                    <Link href="/my-cart">
                        <a>All<span className='total-cart-items'>(2)</span></a>
                    </Link>

                    <Link href="/my-cart">
                        <a>Buy Again</a>
                    </Link>
                </div>
                <div className="cart-header__separator"></div>
                <div className='cart-select-all container-fluid'>
                    <input type="checkbox" id="select-all-item" className='select-all-item' />
                    <label className='ml-2' htmlFor='select-all-item'>Select all</label>
                </div>
            </div>
        </>
    }
    
    return (
        <div className='cart_page'>
            <Head>
                <title>Shopping Cart</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <MobileDetailTab header="Shopping Cart" />
            <CartHeader />
            <div className='container-fluid cart'>
                {
                    myCartItems.map((item) => {
                        return <>
                            <CartItem {...item}/>
                        </>
                    })
                }
                
            </div>
            <CartFooter totalItemsSelected={selectedProducts.length} totalAmount={selectedTotalAmount} />
        </div>
    )
}


export default CartPage
