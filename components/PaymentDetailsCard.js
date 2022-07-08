import { VscChecklist } from "react-icons/vsc";

// Images
import cod from './../public/images/icons/cod.png'
import gcash from './../public/images/icons/gcash.png'
import stripe from './../public/images/icons/stripe.png'

const PaymentCard = (props) => {

    return <>
        <div className="payment-details-card">
            <div className="payment-details-card-header">
                <VscChecklist className="font-price"/> <span>Payment Details</span>
            </div>
            
            <div className="flex just-between mb-1">
                <span>Merchandise Subtotal</span>
                <span>P100</span>
            </div>

            <div className="flex just-between mb-1">
                <span>Shipping Subtotal</span>
                <span>P100</span>
            </div>

            <div className="flex just-between mb-1">
                <span className="font-16">Total Payment</span>
                <span className="font-price font-16">P100</span>
            </div>
        </div>
    </>
}

export default PaymentCard