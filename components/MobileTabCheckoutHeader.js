import React from 'react';
import { ArrowLeft } from 'react-bootstrap-icons';
import Link from "next/link";


const MobileTabCheckoutHeader = () => {
    return (
        <nav className='checkoutMobTabHeader container-fluid'>
            <Link href="/"><a><ArrowLeft /></a></Link>
            <h1>Shopping Cart</h1>
        </nav>
    );
};

export default MobileTabCheckoutHeader;
