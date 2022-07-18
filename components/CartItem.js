import { useState } from 'react';
import { useEffect } from 'react'

import {InputGroup, SplitButton, Dropdown, FormControl} from 'react-bootstrap'
import { Dash, Plus } from 'react-bootstrap-icons';

import shoes from './../public/images/products/shoes-item.png'

const CartItem = (props) => {
    // let [myCartItems, setMyCartItems] = useState(props.cart_items || [])
    

    // useEffect(function() {
    //     setMyCartItems(props.cart_items)
    // }, [props._id])


    return (
        <>
            <div className='cart_product_wrapper'>
                <div className='cart_product'>
                    <div className='cart_product__items'>
                        <div className='cart_product__left'>
                            <input type="checkbox" />
                            <img src={ shoes.src } alt="" className='cart_product__item_img'/>
                        </div>
                        <div className='cart_product__right'>
                            <div className="cart_product__item_details">
                                <p className='cart_product__item_name'>{props.product[0].name}</p>
                                <p className='cart_product__item_price'>P{props.total_amount}</p>
                            </div>
                            <div className="cart_product__qty_controls">
                                <InputGroup className="group-quantity-actions">
                                    <button type="button" className='btn_minus_qty'>
                                        <Dash/>
                                    </button>
                                    <FormControl className='input_qty'  min="1" defaultValue={props.quantity}/>
                                    <button type="button" className='btn_add_qty'>
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
