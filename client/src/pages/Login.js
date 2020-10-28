import React from 'react';
import { Form, Button } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import SignupModal from './Modal';
// import { createBrowserHistory as history } from 'history';

export default function Login(props) {

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <hr />
            <Button variant="success" onClick={props.handleOnClick} style={{ margin: "20px" }}>
                Create new Account
          </Button>
        </div >
    )
}
