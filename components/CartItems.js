import { useState } from 'react';

import {InputGroup, SplitButton, Dropdown, FormControl} from 'react-bootstrap'
import { Dash, Plus } from 'react-bootstrap-icons';

import shoes from './../public/images/products/shoes-item.png'

const CartItems = () => {
    let [qty, setQty] = useState(1)
    
    function Items() {

        return (
            <div className='cart_product_wrapper'>
                <div className='cart_product'>
                    <div className='cart_product__items'>
                        <div className='cart_product__left'>
                            <input type="checkbox" />
                            <img src={ shoes.src } alt="" className='cart_product__item_img'/>
                        </div>
                        <div className='cart_product__right'>
                            <div className="cart_product__item_details">
                                <p className='cart_product__item_name'>Snicker I</p>
                                <p className='cart_product__item_price'>P100</p>
                            </div>
                            <div className="cart_product__qty_controls">
                                <InputGroup className="group-quantity-actions">
                                    <button type="button" className='btn_minus_qty'>
                                        <Dash/>
                                    </button>
                                    <FormControl className='input_qty'  min="1" defaultValue={qty}/>
                                    <button type="button" className='btn_add_qty'>
                                        <Plus />
                                    </button>
                                </InputGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            <Items/>
            <Items/>
        </>
        
    )
}


export default CartItems
