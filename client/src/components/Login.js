import React from 'react';
import {Form} from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignupModal from './Modal';

export default function Login() {
    return (
        <div>
            <Logo />
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <Button variant="success" onClick={SignupModal} >
                    Create new Account (Sign-Up)
                </Button>
            </Form>
        </div >
    )
}
