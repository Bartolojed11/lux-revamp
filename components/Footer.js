import Link from 'next/link';
import { useEffect } from 'react';

// third parties
import { useSelector, useDispatch } from 'react-redux';

// redux
import { initialCartCount } from '../redux/features/cartCounterSlice';

import { Bag, Heart, HouseDoor, Person } from 'react-bootstrap-icons';


// hooks
import { useAuth } from './../hooks/useAuth';

// http
import { getCartCount } from './../http/cart';

export default function Footer() {
    const cartCount = useSelector((state) => state.cartCounter.cart_count);
    const { isAuthenticated, token } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        // const url = process.env.apiUrl + 'cart/count';
        if (isAuthenticated && token !== '') {
            getCartCount({ token })
                .then((total_count) => {
                    dispatch(initialCartCount(total_count));
                })
        }
    }, [isAuthenticated, token]);

    return (
        <div className='footer'>
            <Link href='/'>
                <HouseDoor />
            </Link>
            <Link href='/favorites'>
                <Heart />
            </Link>
            <Link href={isAuthenticated ? '/profile' : '/login'}>
                <Person />
            </Link>
            <Link href='/my-cart' className='cart__link lineheight-0'>
                <span className='cart_count_container'>
                    <div className='cart_count'>{cartCount}</div>
                </span>
                <Bag />
            </Link>
        </div>
    );
}
