import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"

import Card from 'react-bootstrap/Card'

// My Components
import MobileDetailTab from './../../components/MobileDetailTab'
import Footer from './../../components/Footer'
import HtmlHeader from './../../components/Header'

// http
import { getAddressList } from './../../http/userAddress'

// hooks
import { useAuth } from "./../../hooks/useAuth";

// utils
import { titleCase } from "./../../utils/words"

const MyAddress = (params) => {

    const router = useRouter()
    const [addresses, setAddresses] = useState([])

    const { token } = useAuth();

    useEffect(() => {
        if (token === undefined) return;
        getAddressList({
            token: token
        }).then((addressList) => [
            setAddresses(addressList)
        ])

    }, [token])

    function AddressCard(props) {
        const isDefault = props.props.default
        let addressClasses = isDefault ? 'default-address ' : ''
        addressClasses += "mb-3 address-card-body"

        return <Card className={addressClasses}>
            <Card.Body>
                {formatAddress(props.props)}

                <div className="address-card-bottom">
                    <div>
                        {isDefault && <small className='default-address-label'>Default address</small>}
                        {!isDefault && <button className='btn-crystal set-default'>Set as default</button>}
                    </div>

                    <div>
                        <Link href="/my-address/1" className='btn-crystal font-price address-edit-btn'>Edit</Link>
                        {!isDefault && <button className='btn-crystal font-danger address-delete-btn'>Delete</button>}
                    </div>
                </div>
            </Card.Body>
        </Card>
    }

    function formatAddress(address) {
        const { province_name } = address
        let city_name = address.city_name.toLowerCase()
        city_name = city_name.includes('city') ? titleCase(city_name) : `${titleCase(city_name)} City`
        const country = 'PH'
        const brgy_name = address?.brgy_name !== undefined ? `Brgy ${address.brgy_name}, ` : ''
        const postal_code = address?.postal_code !== undefined ? ` ${address.postal_code}, ` : ' '
        const additional_address = address?.additional_address !== undefined ? `${address.additional_address}, ` : ''

        return `${additional_address} ${brgy_name} ${city_name},${postal_code}${province_name}, ${country}`
    }

    return <>
        <div className="address-page">
            <HtmlHeader title='My Addresses' />
            <MobileDetailTab header="My addresses" />

            <div className="container-fluid mt-4">
                <button type="button" className='btn btn-shop-primary mb-4'
                    onClick={() => router.push('/my-address/add')}
                >Add address</button>
                {
                    addresses && addresses.map(address => {
                        return (
                            <AddressCard key={address.brgy_code} props={address} />
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    </>
}

export default MyAddress