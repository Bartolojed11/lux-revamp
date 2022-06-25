import React from "react";
import AuthModal from "./AuthModal";
import { Form } from "react-bootstrap";
import { Person, LockFill, Google, Facebook, PersonLinesFill, People } from "react-bootstrap-icons";
import Link from "next/link";
import { Button } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <AuthModal modalContent={<RegistraitionForm />} />
    </>
  );
};

const RegistraitionForm = () => {
  return (
    <>
      <Form className="registration-form">
        <Form.Group className="form-group-username mb-3" controlId="formBasicEmail">
          <Form.Control
            className="registration-username"
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

        <Form.Group className="form-group-firstname mb-3" controlId="formBasicEmail">
          <Form.Control
            className="registration-firstname"
            type="text"
            placeholder="Firstname"
          />
         <PersonLinesFill className="firstname-left-icon"/>
        </Form.Group>

        <Form.Group className="form-group-lastname mb-3" controlId="formBasicEmail">
          <Form.Control
            className="registration-lastname"
            type="text"
            placeholder="lastname"
          />
            <People className="lastname-left-icon"/>
        </Form.Group>

        <button className="btn btn-shop-secondary btn-full-width mb-3">
          Sign Up
        </button>
        <div className="or-continue-with mb-3 mt-3">
          <p>Or sing up using</p>
        </div>

        <div className="continue-with-thirdparty mb-3 mt-3">
          <Google />
          <Facebook />
        </div>

        <div className="no-account-yet mb-3 mt-3">
          <p>Already have an account?</p>
        </div>

        <Button variant="light" className="btn-full-width mt-3">
          Log In
        </Button>
      </Form>
    </>
  );
};
export default Register;
