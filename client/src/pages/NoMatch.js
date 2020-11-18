import React from "react";
import { Row, Col, Jumbotron, Container } from 'react-bootstrap';
import NavTag from "../components/NavTag";

function NoMatch() {

    const jumbotronStyle={
        margin: "50px", height: "200px", backgroundImage: "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)"
    }

    return (
        <div>
            <NavTag />
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron style={jumbotronStyle}>
                            <h1>404 Page Not Found</h1>
                            <h1>
                                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                                    🙄
                                    </span>
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NoMatch;
