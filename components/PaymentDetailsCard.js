import { VscChecklist } from "react-icons/vsc";

const PaymentCard = ({totalAmount}) => {

    return <>
        <div className="payment-details-card">
            <div className="payment-details-card-header">
                <VscChecklist className="font-price"/> <span>Payment Details</span>
            </div>
            
            <div className="flex just-between mb-1">
                <span>Merchandise Subtotal</span>
                <span>P{totalAmount}</span>
            </div>

            <div className="flex just-between mb-1">
                <span>Shipping Subtotal</span>
                <span>P100</span>
            </div>

            <div className="flex just-between mb-1">
                <span className="font-16">Total Payment</span>
                <span className="font-price font-16">P{totalAmount}</span>
            </div>
        </div>
    </>
}

export default PaymentCard