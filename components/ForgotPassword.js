import React from "react";
import AuthModal from "./AuthModal";
import { Form } from "react-bootstrap";
import { Person, LockFill, Google, Facebook } from "react-bootstrap-icons";
import Link from "next/link";
import { Button } from "react-bootstrap";

const ForgotPassword = () => {
  return (
    <>
      <AuthModal header="Forgot Password" modalContent={<ForgotPassForm />} />
    </>
  );
};

const ForgotPassForm = () => {
  return (
    <>
      <Form className="fogotpass-form">
        <Form.Group className="form-group-username" controlId="formBasicEmail">
          <Form.Control
            className="forgot-pass-username"
            type="email"
            placeholder="Username"
          />
          <Person className="username-left-icon" />
        </Form.Group>

        <button className="btn btn-shop-secondary btn-full-width mb-3 mt-3">
          Send Link
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
};

export default ForgotPassword;
