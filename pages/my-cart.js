import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import CartItems from '../components/CartItems'
import MobileDetailTab from '../components/MobileDetailTab'


const CartPage = () => {

    function CartFooter() {
        const router = useRouter()

        return (
            <div className='cart-footer'>
                <div className='cart-footer__total-wrapper'>
                    <div>Total</div>
                    <div className='total-order-price'>P100</div>
                </div>
                <button type="button" onClick={() => router.push("order/place")} className='btn-shop-primary btn-checkout'>Checkout (<span>0</span>)</button>
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
            <MobileDetailTab  header="Shopping Cart"/>
            <CartHeader />
            <div className='container-fluid cart'>
                <CartItems />
            </div>
            <CartFooter />
        </div>
    )
}


export default CartPage
