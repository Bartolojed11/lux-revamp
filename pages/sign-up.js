import { useState } from 'react'
import { useRouter } from 'next/router'

// Third parties And Icons
import { Form } from "react-bootstrap"
import { Person, People } from "react-bootstrap-icons"
import { BsShieldLock } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md";

// Components
import Footer from './../components/Footer'
import OtherAuth from './../components/OtherAuth'
import HtmlHeader from './../components/Header'

// utils
import { stateSetter } from "../utils/form"
import { requestOptions } from "../utils/requestOptions"

const SignUp = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        first_name: '',
        last_name: ''
    })

    const url = process.env.apiUrl + 'users'

    function handleSubmit(event) {
        event.preventDefault()

        fetch(url, requestOptions('POST', formData))
            .then(response => response.json())
            .then((response) => {
                // Trigger useEffect
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
            <HtmlHeader title='Sign up' />
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
                        placeholder='password'
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
                        placeholder='confirm password'
                        name="passwordConfirm"
                        defaultValue={formData.passwordConfirm}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="form-group-firstname mb-3" controlId="formBasicEmail">
                    <Form.Control
                        className="signup-firstname"
                        type="text"
                        placeholder="First name"
                        name="first_name"
                        defaultValue={formData.first_name}
                        onChange={handleInputChange}
                    />
                    <Person className="firstname-left-icon" />
                </Form.Group>

                <Form.Group className="form-group-lastname mb-3" controlId="formBasicEmail">
                    <Form.Control
                        className="signup-lastname"
                        type="text"
                        placeholder="Last name"
                        name="last_name"
                        defaultValue={formData.last_name}
                        onChange={handleInputChange}
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