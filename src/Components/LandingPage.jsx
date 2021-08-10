import React from 'react';
import {ReactComponent as Img1} from "../Resources/img1.svg";
import {ReactComponent as Img2} from "../Resources/img2.svg";
import {ReactComponent as Img3} from "../Resources/img3.svg";
import {ReactComponent as Img4} from "../Resources/img4.svg";
import "../CSS/LandingPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';
function LandingPage()
{
    return(
        <>
            <Container>
                <Row className = "my-4">
                    <p style = {{textAlign: "center"}}>Welcome to <span><p style = {{color: "#4CC70D"}}>FINIT</p></span></p>
                </Row>
                <Row className = "my-5">
                    <Col>
                        <h2>
                            Interested in learning investment?
                        </h2>
                    </Col>
                    <Col>
                        <Img1 className = "images"/>
                    </Col>
                </Row>
                <Row className = "my-5">
                    <Col>
                        <Img2 className = "images"/>
                    </Col>
                    <Col>
                        <h2>
                            We are here to provide you some tips for your investment journey🤩
                        </h2>
                    </Col>
                </Row>
                <Row className = "my-5">
                    <Col>
                        <h2>
                            Book profits and see the progress...
                        </h2>
                    </Col>
                    <Col>
                        <Img3 className = "images"/>
                    </Col>
                </Row>
                <Row className = "my-5">
                    <Col>
                        <Img4 className = "images"/>
                    </Col>
                    <Col>
                        <h2>
                            Want guidance of the veterans in this game? 😇 Grab a PREMIUM 
                        </h2>
                    </Col>
                </Row>
                <Row className = "my-5">
                    <Button style = {{backgroundColor: "#11b411", color: "black"}}>
                        Start investing with us here 👇🏼
                    </Button>
                </Row>
            </Container>
        </>
    );
}

export default LandingPage;