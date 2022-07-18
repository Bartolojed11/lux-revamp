import Head from 'next/head'
import { useSession } from "next-auth/react"

// Third parties
import { Bag, ChatDots, ChevronLeft, Heart, Link, SlashSquareFill, StarFill } from "react-bootstrap-icons"
import { useRouter } from 'next/router'

import shoes from './../../public/images/products/shoes-item.png'

// utils
import { toastSuccess, toastError } from "../../utils/toasts"

export default function Product({ product }) {

    const router = useRouter()

    return (
        <div className="product-wrapper">

            <Head>
                <title>Product | {product.name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>


            <div className="product-wrapper__header">
                <button className="round-button" type="button" onClick={() => router.back()}>
                    <ChevronLeft />
                </button>

                <button className="round-button" type="button" onClick={() => router.push('/my-cart')}>
                    <Bag />
                </button>
            </div>
            <div className="product-image__wrapper">
                <img src={shoes.src} alt="img" />
            </div>
            <div className="product-price-wrapper">
                <div className="product-price container-fluid">
                    <span className="product-price__discount">P400</span>
                    <span className="product-price__original">P{product.price}</span>
                </div>
                <div className="product-sale">
                    SALE
                </div>
            </div>
            <div className="product-info container-fluid mb-4">
                <h1>{product.name}</h1>
                <p>{product.description || ''}</p>
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

            <Footer {...product} />
        </div>
    )
}

function Footer(product) {
    const { data: session, status } = useSession()
    let token = {}

    if (status === 'authenticated') {
        token = session.user.accessToken
    }

    return (
        <div className="product-footer">
            <div className="product-footer__chat">
                <ChatDots />
                <label>Chat</label>
            </div>
            <div className="v-separator">

            </div>
            <button type="button" className="btn-crystal product-footer__cart" onClick={() => addToCart(product, token)}>
                <Bag />
                <label>Add to cart</label>
            </button>
            <button type="button" className="product-footer__buynow btn-shop-primary">Buy now</button>
        </div>
    )
}


function addToCart(product, token) {
    const url = process.env.apiExternalRoute + 'cart'

    const cart = {
        "cart_items": {
            "product_id": product._id,
            "quantity": 1,
            "amount": product.price,
            "total_amount": product.price
        }
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
            
        },
        body: JSON.stringify(cart)
    }

    fetch(url, requestOptions)
        .then(response => response.json())
        .then((response) => {
            if (response.status === 'success') {
                toastSuccess(response.message)
            } else {
                toastError(response.message)
            }
        })
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context) {
    const { url } = context.params
    const response = await fetch(process.env.apiExternalRoute + 'products/' + url)
    const json = await response.json()
    const { product } = json.data || {}
    return {
        props: {
            product,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}


// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {

    const response = await fetch(process.env.apiExternalRoute + 'products')
    const json = await response.json()
    const { products } = json.data || {}

    // Get the paths we want to pre-render based on posts
    const paths = products.map((product) => {
        return {
            params: { url: product.url.toString() }
        }
    })

    return { paths, fallback: false }
}
