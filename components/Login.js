import { Modal, Form, Button } from "react-bootstrap";
import AuthModal from "./AuthModal";
import { Facebook, Google, LockFill, Person } from "react-bootstrap-icons";
import Link from "next/link";

export default function Login() {
  return <AuthModal modalContent={<LoginForm />} />;
}

function LoginForm() {
  return (
    <>
      <Form className="login-form">
        <Form.Group className="form-group-username" controlId="formBasicEmail">
          <Form.Control
            className="username"
            type="email"
            placeholder="Username"
          />
          <Person className="username-left-icon" />
        </Form.Group>

        <Form.Group
          className="form-group-password mb-3"
          controlId="formBasicPassword"
        >
          <LockFill className="password-left-icon" />
          <Form.Control
            className="password"
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
        </Form.Group>
        <Link
          href="/forgot-password"
          className="forgot-password-link mb-3"
        >
          Forgot Password
        </Link>
        <button className="btn btn-shop-secondary btn-full-width mb-3 mt-3">
          Login
        </button>
        <div className="or-continue-with mb-3 mt-3">
          <p>Or continue With</p>
        </div>

        <div className="continue-with-thirdparty mb-3 mt-3">
          <Google />
          <Facebook />
        </div>

        <div className="no-account-yet mb-3 mt-3">
          <p>No account yet?</p>
        </div>

        <Button variant="light" className="btn-full-width mt-3">
          Sign Up
        </Button>
      </Form>
    </>
  );
}
