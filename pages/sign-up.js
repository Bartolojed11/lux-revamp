import { useState } from 'react'

import { Form, Button } from "react-bootstrap"
import { Person, People } from "react-bootstrap-icons"
import { BsShieldLock } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md";

// Components
import Footer from './../components/Footer'
import OtherAuth from './../components/OtherAuth'

// utils
import { handleInputChange } from "../utils/form"

const SignUp = () => {

    const [ formData, setFormData] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    })

    return (
        <div className="signup-page">
            <Form className="signup-form">
                <h1 className="text-center">Welcome!</h1>
                <p className="text-center">Lorem ipsum</p>
                <Form.Group className="form-group-email mb-3" controlId="formBasicEmail">
                    <Form.Control
                        className="signup-email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={ () => handleInputChange(event, setFormData) }
                    />
                    <MdOutlineMail className="email-left-icon" />
                </Form.Group>

                <Form.Group
                    className="form-group-password mb-3"
                    controlId="formBasicPassword"
                >
                    <BsShieldLock className="password-left-icon" />
                    <Form.Control
                        className="password"
                        type="password"
                        placeholder="&#9679&#9679&#9679&#9679&#9679&#9679&#9679&#9679"
                        name="password"
                        defaultValue={formData.password}
                        onChange={ () => handleInputChange(event, setFormData) }
                    />
                </Form.Group>

                <Form.Group className="form-group-firstname mb-3" controlId="formBasicEmail">
                    <Form.Control
                        className="signup-firstname"
                        type="text"
                        placeholder="Firstname"
                        name="firstname"
                        defaultValue={formData.firstname}
                        onChange={ () => handleInputChange(event, setFormData) }
                    />
                    <Person className="firstname-left-icon" />
                </Form.Group>

                <Form.Group className="form-group-lastname mb-3" controlId="formBasicEmail">
                    <Form.Control
                        className="signup-lastname"
                        type="text"
                        placeholder="lastname"
                        name="lastname"
                        defaultValue={formData.lastname}
                        onChange={ () => handleInputChange(event, setFormData) }
                    />
                    <People className="lastname-left-icon" />
                </Form.Group>

                <button className="btn btn-shop-secondary btn-full-width mb-3">
                    Sign Up
                </button>
                <OtherAuth />
            </Form>
            <Footer />
        </div>
    )
}

export default SignUp