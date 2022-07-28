import { useSession } from "next-auth/react"
import { useState } from 'react'
import Head from 'next/head'

// Third parties And Icons
import Form from 'react-bootstrap/Form'

// Components
import MobileDetailTab from '../../components/MobileDetailTab'
import Footer from '../../components/Footer'

// utils
import { stateSetter } from "../../utils/form"

const ChangePassword = (params) => {

    const [formData, setFormData] = useState({
        oldPassword: '',
        password: '',
        passwordConfirm: ''
    })

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleOnChange(event) {
        stateSetter(event, setFormData)
    }


    return <>
        <MobileDetailTab header="Change Password" />
        <Head>
            <title>Change Password</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="container-fluid profile-page">
            <div className="profile-details-card card">
                <Form onSubmit={handleSubmit} method="post">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Old password</Form.Label>
                        <Form.Control
                            type="password" placeholder=""
                            name="oldPassword"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.oldPassword}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>New password</Form.Label>
                        <Form.Control
                            type="password" placeholder=""
                            name="password"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.password}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Confirm new password</Form.Label>
                        <Form.Control
                            type="password" placeholder=""
                            name="passwordConfirm"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.passwordConfirm}
                        />
                    </Form.Group>


                    <div className="text-center">
                        <button className="btn btn-shop-primary" type="submit">
                            Update
                        </button>
                    </div>
                </Form>

            </div>
        </div>
        <Footer />
    </>


}

export default ChangePassword