import { useState } from 'react'

import { Form } from "react-bootstrap"
import { Person } from "react-bootstrap-icons"

// Components
import Footer from './../components/Footer'

// utils
import { stateSetter } from "../utils/form"

const ForgotPassword = () => {

    const [formData, setFormData] = useState({
        email: ''
    })

    const handleSubmit = async function (event) {
        event.preventDefault()
    }

    return (
        <div className="forgotpass-page">
            <Form className="fogotpass-form">
                <h1 className="text-center">Welcome!</h1>
                <p className="text-center">Lorem ipsum</p>
                <Form.Group className="form-group-email" controlId="formBasicEmail">
                    <Form.Control
                        className="forgot-pass-email"
                        type="email"
                        placeholder="Email"
                        onChange={ handleInputChange }
                        value={formData.email}
                    />
                    <Person className="email-left-icon" />
                </Form.Group>

                <button className="btn btn-shop-secondary btn-full-width mb-3 mt-3">
                    Send Link
                </button>
            </Form>
            <Footer />
        </div>
    )
}

export default ForgotPassword