import { useSession } from "next-auth/react"
import { useState } from 'react'
import Head from 'next/head'

// Third parties And Icons
import Form from 'react-bootstrap/Form'

// Components
import MobileDetailTab from './../../components/MobileDetailTab'
import Footer from './../../components/Footer'

// utils
import { stateSetter } from "./../../utils/form"

const AddAddress = (params) => {

    const [formData, setFormData] = useState({
        province: '',
        region: '',
        city: '',
        brgy: '',
        postalCode: '',
        additionalAddress: '',
    })

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleOnChange(event) {
        stateSetter(event, setFormData)
    }


    return <>
        <MobileDetailTab header="Add Address" />
        <Head>
            <title>Add Address</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="container-fluid add-address-page">
            <div className="add-address-details-card card">
                <Form onSubmit={handleSubmit} method="post">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Province</Form.Label>
                        <Form.Control
                            type="text" placeholder=""
                            name="province"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.province}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Region</Form.Label>
                        <Form.Control
                            type="text" placeholder=""
                            name="region"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.region}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text" placeholder=""
                            name="city"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.city}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Brgy</Form.Label>
                        <Form.Control
                            type="text" placeholder=""
                            name="brgy"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.brgy}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                            type="text" placeholder=""
                            name="postalCode"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.postalCode}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Additional address</Form.Label>
                        <Form.Control
                            type="text" placeholder=""
                            name="additionalAddress"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.additionalAddress}
                        />
                    </Form.Group>

                    <div className="text-center">
                        <button className="btn btn-shop-primary" type="submit">
                            Save
                        </button>
                    </div>
                </Form>

            </div>
        </div>
        <Footer />
    </>


}

export default AddAddress