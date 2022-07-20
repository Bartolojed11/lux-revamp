import { useState } from 'react';
import { useEffect } from 'react'

import { InputGroup, SplitButton, Dropdown, FormControl } from 'react-bootstrap'
import { Dash, Plus } from 'react-bootstrap-icons';

import shoes from './../public/images/products/shoes-item.png'

import { stateSetter } from './../utils/form'

const CartItem = (props) => {

    let [product, setProduct] = useState({
        product_selected: false,
        product_id: props.product[0]._id,
        name: props.product[0].name,
        quantity: props.quantity,
        amount: props.amount,
        total_amount: props.total_amount,

    })

    function handleInputChange(event) {
        stateSetter(event, setProduct)
    }

    useEffect(function() {
        // TODO: Send only if product_selected is different from it's first value
        props.updateSelectedProducts(product)
        
    }, [product.quantity, product.product_selected])

    function addQty() {
        setProduct((product) => {
            const qty = product.quantity + 1
            return {
                ...product,
                quantity: qty,
                total_amount: product.amount * qty
            }
        })
    }

    function minusQty() {
        if (product.quantity > 1) {
            setProduct((product) => {
                const qty = product.quantity - 1
                return {
                    ...product,
                    quantity: qty,
                    total_amount: product.amount * qty
                }
            })
        }
    }

    function selectProduct() {
        setProduct((product) => {
            return {
                ...product,
                product_selected: ! product.product_selected
                
            }
        })
    }

    return (
        <>
            <div className='cart_product_wrapper'>
                <div className='cart_product'>
                    <div className='cart_product__items'>
                        <div className='cart_product__left'>
                            <input type="checkbox" name="product_selected" onClick={ selectProduct }/>
                            <img src={shoes.src} alt="" className='cart_product__item_img' />
                        </div>
                        <div className='cart_product__right'>
                            <div className="cart_product__item_details">
                                <p className='cart_product__item_name'>{product.name}</p>
                                <p className='cart_product__item_price'>P{product.total_amount}</p>
                            </div>
                            <div className="cart_product__qty_controls">
                                <InputGroup className="group-quantity-actions">
                                    <button type="button" className='btn_minus_qty' name="minusQty"  onClick={minusQty}>
                                        <Dash />
                                    </button>
                                    <FormControl className='input_qty' min="1" defaultValue={product.quantity} value={product.quantity}
                                        name="quantity" onChange={handleInputChange}
                                    />
                                    <button type="button" className='btn_add_qty'  name="addQty" onClick={addQty}>
                                        <Plus />
                                    </button>
                                </InputGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default CartItem
