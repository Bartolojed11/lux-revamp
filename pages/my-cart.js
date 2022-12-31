import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Components
import CartItem from '../components/CartItem'
import MobileDetailTab from '../components/MobileDetailTab'
import HtmlHeader from './../components/Header'

// utils
import { requestOptions } from './../utils/requestOptions'

// hooks
import { useAuth } from './../hooks/useAuth'

const CartPage = () => {
    let [myCartItems, setMyCartItems] = useState([])
    let [fetchTriggered, setFetchTriggered] = useState(false)

    let [changesCount, setChangesCount] = useState(0)

    let [selectedProducts, setSelectedProducts] = useState([])
    let [selectedTotalAmount, setSelectedTotalAmount] = useState(0)

    const url = process.env.apiUrl + 'cart'
    const { token } = useAuth()

    useEffect(() => {
        if (token !== undefined && !fetchTriggered) {
            fetch(url, requestOptions('GET', {}, { token: token }))
                .then(response => response.json())
                .then((response) => {
                    setFetchTriggered(true)
                    setMyCartItems(response.data.user_cart.cart_items || [])
                })
                    
        }

    }, [token])


    function CartFooter({ totalAmount, selectedProducts }) {
        const router = useRouter()

        function placeOrder(selectedProducts) {
            localStorage.removeItem('selected_products');
            localStorage.setItem('selected_products', JSON.stringify(selectedProducts));
            router.push('order/place')
        }

        return (
            <div className='cart-footer'>
                <div className='cart-footer__total-wrapper'>
                    <div>Total</div>
                    <div className='total-order-price'>P{totalAmount || 0}</div>
                </div>
                <button type="button" onClick={() => placeOrder(selectedProducts)} className='btn-shop-primary btn-checkout'>Checkout (<span>{selectedProducts.length}</span>)</button>
            </div>
        )
    }

    function CartHeader() {
        return <>
            <div className='cart-header'>
                <div className='cart-navigations'>
                    <Link href="/my-cart">
                        All<span className='total-cart-items'>(2)</span>
                    </Link>

                    <Link href="/my-cart">
                        Buy Again
                    </Link>
                </div>
                <div className="cart-header__separator"></div>
                <div className='cart-select-all container-fluid'>
                    <input type="checkbox" id="select-all-item" className='select-all-item' />
                    <label className='ml-2' htmlFor='select-all-item'>Select all</label>
                </div>
            </div>
        </>
    }


    function updateSelectedProducts(data) {
        setChangesCount(changesCount => changesCount + 1)

        let products = []
        let isDuplicate = false

        if (selectedProducts.length === 0) {
            if (data.product_selected) {
                products = [...selectedProducts]
                setSelectedProducts((selectedProducts) => {
                    return [...selectedProducts, data]
                })
            }
        } else {
            // return only the products that are selected
            products = selectedProducts.map(function (product) {
                if (product.product_id === data.product_id) {
                    isDuplicate = true
                    product = data
                }
                return product
            })

            products = products.filter((product) => {
                return product.product_selected === true
            })

            setSelectedProducts(() => {
                if (isDuplicate) {
                    return [...products]
                } else {
                    return [...products, data]
                }
            })
        }
    }

    useEffect(function () {
        let selectedAmount = 0
        selectedProducts.map((product) => {
            selectedAmount += product.total_amount
            setSelectedTotalAmount((selectedTotalAmount) => {
                selectedTotalAmount = selectedAmount
                return selectedAmount
            })
        })

        if (selectedProducts.length === 0) {
            setSelectedTotalAmount(0)
        }

    }, [changesCount])

    return (
        <div className='cart_page'>
            <HtmlHeader title='Shopping Cart' />
            <MobileDetailTab header="Shopping Cart" />
            <CartHeader />
            <div className='container-fluid cart'>
                {
                    myCartItems.map((item) => {
                        return <>
                            <CartItem
                                updateSelectedProducts={updateSelectedProducts}
                                {...item} />
                        </>
                    })
                }

            </div>
            <CartFooter
                selectedProducts={selectedProducts}
                totalAmount={selectedTotalAmount}

            />
        </div>
    )
}


export default CartPage
