import { useRouter } from 'next/router'

import { ArrowLeft } from 'react-bootstrap-icons'


const MobileTabCheckoutHeader = () => {

    const router = useRouter()

    return (
        <nav className='checkoutMobTabHeader container-fluid'>
            <a onClick={() => router.back()}><ArrowLeft /></a>
            <h1>Shopping Cart</h1>
        </nav>
    )
}

export default MobileTabCheckoutHeader
