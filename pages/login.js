import Link from "next/link"
import { useState } from 'react'
import { signIn, getCsrfToken } from "next-auth/react"
import { useSession, unstable_getServerSession } from "next-auth/next"

import { Form } from "react-bootstrap"
import { BsShieldLock } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md"

// My Components
import Footer from './../components/Footer'
import OtherAuth from './../components/OtherAuth'

// utils
import { handleInputChange } from "../utils/form"

const Login = (props) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  async function handleSubmit(event) {
    event.preventDefault()
    // Will submit to [..nextauth].js
    const res = await signIn('credentials', {
      redirect: false,
      email: formData.email,
      password: formData.password
    });
    if (res?.error) {
      console.log("🚀 ~ file: login.js ~ line 37 ~ handleSubmit ~ res", res)

    } else {
      console.log('no error')
    }
  }

  return (
    <div className="login-page">
      <Form className="login-form" method="post" onSubmit={handleSubmit} >
        <h1 className="text-center">Welcome!</h1>
        <p className="text-center">Lorem ipsum</p>
        <Form.Group className="form-group-email" controlId="formBasicEmail">
          <Form.Control
            className="email"
            type="email"
            placeholder="Email"
            onChange={() => handleInputChange(event, setFormData)}
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
            onChange={() => handleInputChange(event, setFormData)}
            name="password"
            defaultValue={formData.password}
          />
        </Form.Group>
        <Link
          href="/forgot-password"
        >
          <a className="forgot-password-link mt-3">Forgot Password</a>
        </Link>
        <button className="btn btn-shop-secondary btn-full-width mb-3" type="submit">
          Login
        </button>
        <OtherAuth noAccountYet={true} />
      </Form>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {

  return {
    props: {
      // Check other explanation for this code
      // csrfToken: await getCsrfToken(context),
    }
  };
}


export default Login