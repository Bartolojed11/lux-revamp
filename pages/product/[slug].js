import { Bag, ChatDots, ChevronLeft, Heart, Link, SlashSquareFill, StarFill } from "react-bootstrap-icons"
import { useRouter } from 'next/router'

import shoes from './../../public/images/products/shoes-item.png'

export default function Product() {
    const router = useRouter()

    return (
        <div className="product-wrapper">
            <div className="product-wrapper__header">
                <button className="round-button" type="button" onClick={() => router.back()}>
                    <ChevronLeft />
                </button>

                <button className="round-button" type="button" onClick={() => router.push('/cart-page')}>
                    <Bag />
                </button>
            </div>
            <div className="product-image__wrapper">
                <img src={shoes.src} />
            </div>
            <div className="product-price-sale-wrapper">
                <div className="product-price container-fluid">
                    <span className="product-price__discount">P400</span>
                    <span className="product-price__original">P300</span>
                </div>
                <div className="product-sale">
                    SALE
                </div>
            </div>
            <div className="product-info container-fluid mt-2 mb-4">
                <h1>Snickers I</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius non massa vel euismod. </p>
            </div>
            <div className="product-wrapper__footer container-fluid">
                <div className="rating">
                    <div className="rating__stars">
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                    </div>
                    <div className="rating__total">5</div>
                </div>
                <div className="sold-total">
                    5k Sold
                </div>
                <div className="product-actions">
                    <button type="button" className="btn-crystal p-0">
                        <Heart />
                    </button>

                    <Link href="somewhere">
                        <SlashSquareFill />
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}

function Footer() {
    return (
        <div className="product-footer">
            <div className="product-footer__chat">
                <ChatDots />
                <label>Chat</label>
            </div>
            <div className="v-separator">

            </div>
            <div className="product-footer__cart">
                <Bag />
                <label>Add to cart</label>
            </div>
            <button type="button" className="product-footer__buynow btn-shop-primary">Buy now</button>
        </div>
    )
}