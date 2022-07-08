import { useState } from 'react'
import Head from 'next/head'

import Card from 'react-bootstrap/Card'

// My Components
import MobileDetailTab from '../components/MobileDetailTab'
import Footer from './../components/Footer'

const MyAddress = (params) => {
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

    function AddressCard(props) {
        const { completeAddress, isDefault } = props.props
        let addressClasses = isDefault ? 'default-address ' : ''
        addressClasses += "mb-3 address-card-body"

        return <Card className={addressClasses}>
            <Card.Body>
                {completeAddress}

                <div className="address-card-bottom">
                    <div>
                        {isDefault && <small className='default-address-label'>Default address</small>}
                        {!isDefault && <button className='btn-crystal set-default'>Set as default</button>}
                    </div>

                    <div>
                        <button className='btn-crystal font-price address-edit-btn'>Edit</button>
                        {!isDefault && <button className='btn-crystal font-danger address-delete-btn'>Delete</button>}
                    </div>
                </div>
            </Card.Body>
        </Card>
    }

    return <>
        <div className="address-page">

            <Head>
                <title>My Profile</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <MobileDetailTab header="My addresses" />
            <div className="container-fluid mt-4">
                <button type="button" className='btn btn-shop-primary mb-4'>Add address</button>
                {
                    addresses.map(address => {
                        return (
                            <AddressCard key={address.id} props={address} />
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    </>
}

export default MyAddress