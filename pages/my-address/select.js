import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from "next/link"


import Card from 'react-bootstrap/Card'

// My Components
import MobileDetailTab from '../../components/MobileDetailTab'
import Footer from '../../components/Footer'

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

            <Head>
                <title>Select Address</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

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
                        <div className="text-center mt-4">
                            <button type="button" className="btn btn-shop-primary">Select Address</button>
                        </div>

                    </Card.Body>
                </Card>
                <Footer />
            </div>
        </div>
    </>
}

export default Select