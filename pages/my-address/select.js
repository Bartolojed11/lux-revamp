import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"

import Card from 'react-bootstrap/Card'

// My Components
import MobileDetailTab from '../../components/MobileDetailTab'
import Footer from './../../components/Footer'
import HtmlHeader from './../../components/Header'

const Select = (params) => {

    const router = useRouter()
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            completeAddress: 'Brgy. Margot, Dahlia Street, Angeles City, Pampanga, 6100',
            isDefault: true,
        },
        {
            id: 2,
            completeAddress: 'Brgy. Margot, Dahlia Street, Angeles City, Pampanga, 6100',
            isDefault: false,
        },
        {
            id: 3,
            completeAddress: 'Brgy. Margot, Dahlia Street, Angeles City, Pampanga, 6100',
            isDefault: false,
        }
    ])

    return <>
        <div className="select-address-page">
            <HtmlHeader title='Select Address' />
            <MobileDetailTab header="Select Address" />
            <div className="container-fluid mt-4">
                <Card>
                    <Card.Body>
                        {
                            addresses.map(address => {
                                return <>
                                    <div className="address-option">
                                        <div><input type="radio" name="addressOption" value={address.completeAddress} /></div>
                                        <div>{address.completeAddress}</div>
                                    </div>
                                </>
                            })
                        }
                        <div className="text-center mt-4 xy-center just-evenly">
                            <button type="button" className="btn btn-shop-primary">Select Address</button>
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