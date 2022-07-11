import { useState } from 'react'
import { useRouter } from 'next/router'

import { Form, Button } from "react-bootstrap"
import { Person, People } from "react-bootstrap-icons"
import { BsShieldLock } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md";

// Components
import Footer from './../components/Footer'
import OtherAuth from './../components/OtherAuth'

// utils
import { stateSetter } from "../utils/form"

const SignUp = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        first_name: '',
        last_name: ''
    })

    const url = process.env.apiExternalRoute + 'users'

    function handleSubmit(event) {
        event.preventDefault()

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }

        fetch(url, requestOptions)
            .then(response => response.json())
            .then((response) => {
                // Trigger useEffect
                console.log(response)
                if (response.status === 'success') {
                    router.push('/login')
                } 
            })
    }

    function handleInputChange(event) {
        stateSetter(event, setFormData)
    }

    return (
        <div className="signup-page">
            <Form className="signup-form" method="post" onSubmit={handleSubmit}>
                <h1 className="text-center">Welcome!</h1>
                <p className="text-center">Lorem ipsum</p>
                <Form.Group className="form-group-email mb-3" controlId="formBasicEmail">
                    <Form.Control
                        className="signup-email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
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
                        placeholder=''
                        name="password"
                        defaultValue={formData.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group
                    className="form-group-password mb-3"
                    controlId="formBasicPassword"
                >
                    <BsShieldLock className="password-left-icon" />
                    <Form.Control
                        className="password"
                        type="password"
                        placeholder=''
                        name="passwordConfirm"
                        defaultValue={formData.passwordConfirm}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="form-group-first_name mb-3" controlId="formBasicEmail">
                    <Form.Control
                        className="signup-first_name"
                        type="text"
                        placeholder="first_name"
                        name="first_name"
                        defaultValue={formData.first_name}
                        onChange={handleInputChange}
                    />
                    <Person className="first_name-left-icon" />
                </Form.Group>

                <Form.Group className="form-group-last_name mb-3" controlId="formBasicEmail">
                    <Form.Control
                        className="signup-last_name"
                        type="text"
                        placeholder="last_name"
                        name="last_name"
                        defaultValue={formData.last_name}
                        onChange={handleInputChange}
                    />
                    <People className="last_name-left-icon" />
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