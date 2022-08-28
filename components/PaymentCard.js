import { BiDollarCircle } from "react-icons/bi"

// Images
import cod from './../public/images/icons/cod.png'
import gcash from './../public/images/icons/gcash.png'
import stripe from './../public/images/icons/stripe.png'

const PaymentCard = (props) => {

    return <>
        <div className="payment-card">
            <div className="payment-card-header">
                <BiDollarCircle  className="font-price"/> <span>Payment Options</span>
            </div>
            
            <div className="payment-card-options">
                <button type="button" className="btn btn-crystal">
                    <img src={cod.src} alt={cod.src} />Cash on delivery
                </button>

                <button type="button" className="btn btn-crystal">
                    <img src={gcash.src} alt={gcash.src} />GCash
                </button>

                <button type="button" className="btn btn-crystal">
                    <img src={stripe.src} alt={stripe.src} />Stripe
                </button>
            </div>
        </div>
    </>
}

export default PaymentCard