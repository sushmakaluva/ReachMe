import React, { useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import API from "../utils/API";
import "./modal.css";

export default function SignupModal(props) {

    const [formObject, setFormObject] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    }

    const manageOnSubmit = (e) => {
        e.preventDefault();
        API.userSignup(formObject)
            .then(function (response) {
                alert("User account created successfully");
            })
            .catch(e => {
                alert(e.error);
            });
    }

    const showHideClassName = props.showModal ? "modal display-block" : "modal display-none";
    
return (
    <Modal
        {...props}
        size="md"
        className={showHideClassName}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show} onHide={props.onHide}
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Sign Up
                </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={manageOnSubmit}>
                <Row style={{ marginBottom: "20px" }}>
                    <Col>
                        <Form.Control placeholder="First name" name="first_name" onChange={handleInputChange} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" name="last_name" onChange={handleInputChange} />
                    </Col>
                </Row>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email address" name="email" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleInputChange} />
                </Form.Group>
                <Button variant="success" type="submit" >
                    Sign Up
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
);
}


