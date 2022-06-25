const ItemsOrderedDetails = () => {
  const public_path = process.env.REACT_APP_PUBLIC_URL;
  const img = "shoes-item.png";
  
  function Totals() {
      return (
        <div className="totals row">
            <div className="col-9 font-12 totals-label">Shipping Total</div>
            <div className="col-3 font-12 totals-value">P100</div>
            <div className="col-9 font-12 totals-label">Sub Total</div>
            <div className="col-3 font-12 totals-value">P100</div>
            <div className="col-9 font-12 totals-label">Total</div>
            <div className="col-3 font-12 totals-value">P100</div>
        </div>
      )
  }

  return (
    <div className="order_contents">
      <div className="order_header">
        <input type="checkbox" />
        <img
          src={public_path + "icons/shop-icon.png"}
          className="shop-icon"
          alt=""
        />
        <h2>Mall 1</h2>
      </div>
      <div className="order_body container-fluid">
        <div className="order_body__items row">
          <div className="order_body__left col-4">
            <input type="checkbox" />
            <img src={public_path + img} alt="" className="order_body__img" />
          </div>
          <div className="order_body__center col-5">
            <p className="order_body__item_name">Snicker I</p>
            <p className="order_body__item_qty">x3</p>
          </div>
          <div className="order_body__right col-3">
            <p className="order_body__item_price">P100</p>
          </div>
        </div>
      </div>

      <div className="order_body container-fluid">
        <div className="order_body__items row">
          <div className="order_body__left col-4">
            <input type="checkbox" />
            <img src={public_path + img} alt="" className="order_body__img" />
          </div>
          <div className="order_body__center col-5">
            <p className="order_body__item_name">Snicker I</p>
            <p className="order_body__item_qty">x3</p>
          </div>
          <div className="order_body__right col-3">
            <p className="order_body__item_price">P100</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Totals/>
      </div>
      
    </div>
  );
};

export default ItemsOrderedDetails;
