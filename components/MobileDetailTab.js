import { useRouter } from 'next/router'

import { ArrowLeft } from 'react-bootstrap-icons'

const MobileDetailTab = (props) => {
    const header = props.header || 'Shopping Cart'
    const router = useRouter()

    return (
        <nav className="checkoutMobTabHeader container-fluid">
            <a onClick={() => router.back()}>
                <ArrowLeft />
            </a>
            <h1>{header}</h1>
        </nav>
    )
}

export default MobileDetailTab
