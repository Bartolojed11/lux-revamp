import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Card from 'react-bootstrap/Card'

// My Components
import MobileDetailTab from './../../components/MobileDetailTab'
import Footer from './../../components/Footer'
import HtmlHeader from './../../components/Header'

// http
import { getAddressList } from './../../http/userAddress'

// hooks
import { useAuth } from './../../hooks/useAuth'

// utils
import { formatAddress } from './../../utils/textFormatter'

const MyAddress = (params) => {
    const router = useRouter()
    const [addresses, setAddresses] = useState([])

    const { token } = useAuth()

    useEffect(() => {
        if (token === undefined) return
        getAddressList({
            token: token,
        }).then((addressList) => [setAddresses(addressList)])
    }, [token])

    function AddressCard(props) {
        const isDefault = props.props.default
        let addressClasses = isDefault ? 'default-address ' : ''
        addressClasses += 'mb-3 address-card-body'

        return (
            <Card className={addressClasses}>
                <Card.Body>
                    {formatAddress(props.props)}

                    <div className="address-card-bottom">
                        <div>
                            {isDefault && (
                                <small className="default-address-label">
                                    Default address
                                </small>
                            )}
                            {!isDefault && (
                                <button className="btn-crystal set-default">
                                    Set as default
                                </button>
                            )}
                        </div>

                        <div>
                            <Link
                                href="/my-address/1"
                                className="btn-crystal font-price address-edit-btn"
                            >
                                Edit
                            </Link>
                            {!isDefault && (
                                <button className="btn-crystal font-danger address-delete-btn">
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    }

    return (
        <>
            <div className="address-page">
                <HtmlHeader title="My Addresses" />
                <MobileDetailTab header="My addresses" />

                <div className="container-fluid mt-4">
                    <button
                        type="button"
                        className="btn btn-shop-primary mb-4"
                        onClick={() => router.push('/my-address/add')}
                    >
                        Add address
                    </button>
                    {addresses &&
                        addresses.map((address) => {
                            return (
                                <AddressCard
                                    key={address.brgy_code}
                                    props={address}
                                />
                            )
                        })}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MyAddress
