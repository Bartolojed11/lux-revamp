import Head from 'next/head'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from "next/link"

// Third parties
import { Bag, ChatDots, ChevronLeft, Heart, SlashSquareFill, StarFill } from "react-bootstrap-icons"
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { increment, initialCartCount } from '../../redux/features/cartCounterSlice'

import shoes from './../../public/images/products/shoes-item.png'

// utils
import { toastSuccess, toastError } from "../../utils/toasts"
import { requestOptions } from "../../utils/requestOptions"

export default function Product({ product }) {

    const router = useRouter()
    const cartCount = useSelector((state) => state.cartCounter.cart_count)
    let [token, setToken] = useState('')

    const { data: session, status } = useSession()

    useEffect(() => {
        if (status === 'authenticated') {
            setToken(session.user.accessToken)
        }
    }, [status])

    const dispatch = useDispatch()

    useEffect(() => {
        const url = process.env.apiExternalRoute + 'cart/count'
        if (status === 'authenticated' && token !== '') {

            fetch(url, requestOptions('GET', {}, { token: token }))
                .then(response => response.json())
                .then((response) => {
                    if (response.status === 'success') {
                        dispatch(initialCartCount(response.total_count))
                    }
                })
        }

    }, [status, token])


    function Footer({ product, router, token }) {
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
                <button type="button" className="product-footer__buynow btn-shop-primary" onClick={() => buyNow(product, token, router)}>Buy now</button>
            </div>
        )
    }


    async function addToCart(product, token, buyNow = false) {
        const url = process.env.apiExternalRoute + 'cart'
        const cart = {
            "cart_items": {
                "product_id": product._id,
                "quantity": 1,
                "amount": product.price,
                "total_amount": product.price
            }
        }

        fetch(url, requestOptions('POST', cart, { token: token }))
            .then(response => response.json())
            .then((response) => {
                if (response.status === 'success') {
                    dispatch(increment())
                    if (!buyNow) {
                        toastSuccess(response.message)
                    }

                } else {
                    toastError(response.message)
                }
            })
    }

    async function buyNow(product, token, router) {
        await addToCart(product, token, true)

        const productFromStorage = getProductFromLocalStorage(product._id)
        let qty = productFromStorage.quantity || 0
        let total_amount = productFromStorage.total_amount || 0
        qty += 1
        total_amount += product.price

        localStorage.removeItem('selected_products');
        localStorage.setItem('selected_products', JSON.stringify([{
            product_selected: true,
            product_id: product._id,
            name: product.name,
            quantity: qty,
            amount: product.price,
            total_amount: total_amount
        }]))
        router.push('/order/place')
    }

    function getProductFromLocalStorage(product_id) {
        let products = JSON.parse(localStorage.getItem('selected_products'));

        let selected_product = {}
        if (products !== null) {
            for (const product of products) {
                if (product.product_id === product_id) {
                    selected_product = product
                }
            }
        }

        return selected_product
    }

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

                <button className="round-button header-cart-container" type="button" onClick={() => router.push('/my-cart')}>
                    <div className="header-cart-count">{cartCount}</div>
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

            <Footer product={product} router={router} token={token} />
        </div>
    )
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

    const response = await fetch(process.env.apiExternalRoute + 'products/search')
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
