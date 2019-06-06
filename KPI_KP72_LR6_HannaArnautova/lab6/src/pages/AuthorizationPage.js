import React from "react";
import Authorization from "../components/Authorization";
import SunPic from  "../pics/sun.png"
import {Container, Row, Col, Jumbotron, Image } from "react-bootstrap";

function AuthorizationPage() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm={5}>
                    <Jumbotron>
                        <Image  src={SunPic} alt="sun picture" width={200}/>
                        <Authorization/>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default AuthorizationPage;
