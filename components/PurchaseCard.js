const PurchaseCard = (props) => {
    const { header } = props
    const { items } = props


    function Items(item) {
        return <>
            <div className="purchase-card-item-container row">
                <div className="col-3">
                    <img className="purchase-item-img" src={item.image.src} alt={item.slug} />
                </div>

                <div className="col-7 purchase-item-details">
                    <p className="purchase-item-name">{item.name}</p>
                    <p className="purchase-item-qty">x{item.quantity}</p>
                </div>

                <div className="col-2 purchase-item-price-wrapper">
                    <p className="purchase-item-price">P{item.price}</p>
                </div>

            </div>
        </>
    }

    function PurchaseCardFooter() {
        return <>
            <div className="shipping-info-container">
                <span>Shipping Details</span>
                <div className="shipping-info">
                    <span className="font-12">Receive by Jan 7 - 12</span>
                    <span className="shipping-fee">P50</span>
                </div>
            </div>
            <div className="purchase-message-container">
                <span>Message:</span>
                <span>n/a</span>
            </div>
            <div className="purchase-total-container">
                <span className="">Order Total(<span className="font-12">2 items</span>)</span>
                <span className="font-price">P100</span>
            </div>
        </>
    }


    return <>
        <div className="purchase-card-wrapper mb-3">
            <div className="purchase-card-header">
                <span className="font-14 font-600">{header?.title || ''}</span>
                <span className="font-14 font-600 font-price">{header?.value || ''}</span>
            </div>
            <div className="purchase-card-items">
                {
                    items.map((item) => {
                        return <Items {...item} key={item.slug} />
                    })
                }
            </div>
            <PurchaseCardFooter />
        </div>
    </>
}

export default PurchaseCard