import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"

import Card from 'react-bootstrap/Card'

// My Components
import MobileDetailTab from '../../components/MobileDetailTab'
import Footer from './../../components/Footer'
import HtmlHeader from './../../components/Header'

// http
import { getAddressList } from './../../http/userAddress'

// utils
import { formatAddress } from "./../../utils/textFormatter"

// hooks
import { useAuth } from "./../../hooks/useAuth";

const Select = (params) => {
    const { token } = useAuth();
    const router = useRouter()
    const [addresses, setAddresses] = useState([])
    const [selectedAddress, setSelectedAddress] = useState({})
    const [defaultAddress, setDefaultAddress] = useState({})

    useEffect(() => {
        getAddressList({
            token: token
        }).then((addressList) => [
            setAddresses(addressList)
        ])
        setSelectedAddress(JSON.parse(localStorage.getItem('default_shipping_address'))?._id)
    }, [token])

    function setShippingAddress() {
        console.log('selectedAddress', selectedAddress)
        const addressToStore = addresses.filter((address) => {
            return address._id == selectedAddress
        })
        localStorage.removeItem('default_shipping_address')
        localStorage.setItem('default_shipping_address', JSON.stringify(addressToStore[0]))
        router.push('/order/place')
    }

    return <>
        <div className="select-address-page">
            <HtmlHeader title='Select Address' />
            <MobileDetailTab header="Select Address" />
            <div className="container-fluid mt-4">
                <Card>
                    <Card.Body>
                        {
                            addresses && addresses.map(address => {
                                return <>
                                    <div className="address-option">
                                        <div>
                                            <input
                                                type="radio"
                                                checked={selectedAddress == address._id} 
                                                id={address.city_code + '-' + address.brgy_code}
                                                name="selectedAddress"
                                                onChange={() => setSelectedAddress(event.target.value)}
                                                value={address._id} />
                                        </div>
                                        <div><label for={address.city_code + '-' + address.brgy_code}>{formatAddress(address)}</label></div>
                                    </div>
                                </>
                            })
                            
                        }
                        <div className="text-center mt-4 xy-center just-evenly">
                            <button type="button" className="btn btn-shop-primary" onClick={setShippingAddress}>Select Address</button>
                            <button type="button" className="btn btn-shop-secondary btn-primary-radius">Add Address</button>
                        </div>

                    </Card.Body>
                </Card>
                <Footer />
            </div>
        </div>
    </>
}

export default Select