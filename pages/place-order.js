import React from "react";
import MobileTabCheckoutHeader from "../../components/MobileTabCheckoutHeader";
import Link from "next/link";
import pubRoutes from "../../routes/public-routes";
import ItemOrdered from "../../components/ItemsOrderedDetails";

const PlaceOrder = () => {
  function DeliveryAddress() {
    return (
      <div className="delivery-address">
        <div className="delivery-address__header">
          <div>Delivery Address</div>
          <Link href={pubRoutes.addresses}>Change Address</Link>
        </div>
        <div>Lorem, Ipsum, Dolor City, Negros Occidental, Lorem Ipsum</div>
      </div>
    );
  }

  function PlaceOrderFooter() {

    return (
        <div className='place-order-footer'>
            <div className='place-order-footer__total-wrapper'>
                <div>Total</div>
                <div id='totalPrice'>P100</div>
            </div>
            <button type="button" className='btn-shop-primary btn-checkout'>Place Order</button>
        </div>
    )
}

  return (
    <div className="place-order__wrapper">
      <MobileTabCheckoutHeader />
      <div className="container-fluid">
        <DeliveryAddress />
        <ItemOrdered/>
      </div>
      <PlaceOrderFooter/>
    </div>
  );
};

export default PlaceOrder;
