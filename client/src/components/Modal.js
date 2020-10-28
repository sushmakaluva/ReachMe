import React from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export default function SignupModal(props) {
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
                <Form>
                    <Row style={{marginBottom:"20px"}}>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email address" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" type="submit">
                    Sign Up
                </Button>
            </Modal.Footer>
        </Modal>
    );
}


