import CartItems from './../components/CartItems';
import MobileTabCheckoutHeader from './../components/MobileTabCheckoutHeader';
import { useRouter } from 'next/router'

const CartPage = () => {

    function CartFooter() {
        const router = useRouter();
    
        return (
            <div className='cart-footer'>
                <div className='cart-footer__select-all-wrapper'>
                    <input type="checkbox" id="select-all-item" className='select-all-item'/>
                    <label htmlFor='select-all-item'>All</label>
                </div>
                <div className='cart-footer__total-wrapper'>
                    <div>Total</div>
                    <div id='totalPrice'>P100</div>
                </div>
                <button type="button" onClick={() => router.push("place-order")} className='btn-shop-primary btn-checkout'>Checkout (<span>0</span>)</button>
            </div>
        )
    }

    return (
        <div className='cart_page'>
            <MobileTabCheckoutHeader/>
            <div className='container-fluid cart'>
                <CartItems/>
            </div>
            <CartFooter/>
        </div>
    );
};


export default CartPage;
