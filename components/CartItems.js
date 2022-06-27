import { useState } from 'react';

import {InputGroup, SplitButton, Dropdown, FormControl} from 'react-bootstrap'
import { Dash, Plus } from 'react-bootstrap-icons';

import shoes from './../public/images/products/shoes-item.png'
import shopIcon from './../public/images/icons/shop-icon.png'

const CartItems = () => {
    let [qty, setQty] = useState(1)
    
    function Items() {

        return (
            <div className='cart_contents'>
                <div className='cart_header'>
                    <input type="checkbox" />
                    <img src={ shopIcon.src } className="shop-icon" alt=""/>
                    <h2>Mall 1</h2>
                </div>
                <div className='cart_body'>
                    <div className='cart_body__items'>
                        <div className='cart_body__left'>
                            <input type="checkbox" />
                            <img src={ shoes.src } alt="" className='cart_body__img'/>
                        </div>
                        <div className='cart_body__right'>
                            <p className='cart_body__item_name'>Snicker I</p>
                            <p className='cart_body__item_price'>P100</p>
                            <InputGroup className="mb-3 group-quantity-actions">
                                <button type="button" className='btn_minus_qty'>
                                    <Dash/>
                                </button>
                                <FormControl className='input_qty'  min="1" value={qty}/>
                                <button type="button" className='btn_add_qty'alignRight>
                                    <Plus />
                                </button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
    
                <div className='cart_body'>
                    <div className='cart_body__items'>
                        <div className='cart_body__left'>
                            <input type="checkbox" />
                            <img src={ shoes.src } alt="" className='cart_body__img'/>
                        </div>
                        <div className='cart_body__right'>
                            <p className='cart_body__item_name'>Snicker I</p>
                            <p className='cart_body__item_price'>P100</p>
                            <InputGroup className="mb-3 group-quantity-actions">
                                <button type="button" className='btn_minus_qty'>
                                    <Plus />
                                </button>
                                <FormControl className='input_qty' value={qty} />
                                <button type="button" className='btn_add_qty'alignRight>
                                    <Dash/>
                                </button>
                            </InputGroup>
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
