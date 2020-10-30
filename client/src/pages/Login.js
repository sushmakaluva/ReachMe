import React from 'react';
import { Form, Button } from 'react-bootstrap';
import API from "../utils/API";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import SignupModal from './Modal';
// import { createBrowserHistory as history } from 'history';

export default function Login(props) {

    const [formObject, setFormObject] = useState({
        email: "",
        password: "",
    })


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    }

    const manageOnClick = (e) => {
        API.userLogin({
            email: formObject.email,
            password: formObject.password
        })
            .then(function (response) {
                window.location.href = "/home"
            })
            .catch(e => {
                alert(e.error);
            });
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={manageOnClick}>
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
