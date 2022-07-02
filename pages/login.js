import Link from "next/link"
import { useState } from 'react'

import { Form } from "react-bootstrap"
import { BsShieldLock } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md"

// Components
import Footer from './../components/Footer'
import OtherAuth from './../components/OtherAuth'

// utils
import { handleInputChange } from "../utils/form"

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    return (
        <div className="login-page">
          <Form className="login-form">
            <h1 className="text-center">Welcome!</h1>
            <p className="text-center">Lorem ipsum</p>
            <Form.Group className="form-group-email" controlId="formBasicEmail">
              <Form.Control
                className="email"
                type="email"
                placeholder="Email"
                onChange={ () => handleInputChange(event, setFormData) }
                name="email"
                value={formData.email}
              />
              <MdOutlineMail className="email-left-icon" />
            </Form.Group>
    
            <Form.Group
              className="form-group-password"
              controlId="formBasicPassword"
            >
              <BsShieldLock className="password-left-icon" />
              <Form.Control
                className="password"
                type="password"
                placeholder="Password"
                onChange={ () => handleInputChange(event, setFormData) }
                name="password"
                defaultValue={formData.password}
              />
            </Form.Group>
            <Link
              href="/forgot-password"
            >
                <a className="forgot-password-link mt-3">Forgot Password</a>
            </Link>
            <button className="btn btn-shop-secondary btn-full-width mb-3 mt-3">
              Login
            </button>
            <OtherAuth noAccountYet={true}/>
          </Form>
          <Footer />
        </div>
      )    
}


export default Login