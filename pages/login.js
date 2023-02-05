import Link from "next/link"
import { useState } from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router'

// Third parties And Icons
import { Form } from "react-bootstrap"
import { BsShieldLock } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md"

// My Components
import Footer from './../components/Footer'
import OtherAuth from './../components/OtherAuth'
import HtmlHeader from './../components/Header'

// utils
import { stateSetter } from "../utils/form"
import { useToast } from "./../hooks/useToast";

const Login = (props) => {
  const router = useRouter()
  const { toastSuccess, toastError } = useToast()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  function handleInputChange(event) {
    stateSetter(event, setFormData)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    // Will submit to [..nextauth].js
    const res = await signIn('credentials', {
      redirect: false,
      email: formData.email,
      password: formData.password
    });
    if (res?.error) {
      const error = JSON.parse(res?.error)
      toastError(error.message)
    } else {
      toastSuccess("Login succssfully!")
      setTimeout(() => {
        router.push('/')
      }, 3000)

    }
  }

  return (

    <div className="login-page">
      <HtmlHeader title="Login" />
      <Form className="login-form" method="post" onSubmit={handleSubmit} >
        <h1 className="text-center">Welcome!</h1>
        <p className="text-center">Lorem ipsum</p>
        <Form.Group className="form-group-email" controlId="formBasicEmail">
          <Form.Control
            className="email"
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            name="password"
            defaultValue={formData.password}
          />
        </Form.Group>
        <Link
          href="/password/forgot"
          className="forgot-password-link mt-3"
        >Forgot Password</Link>
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