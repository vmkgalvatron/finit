import React, { Component } from 'react';
import {ReactComponent as Img1} from "../images/img1.svg";
import {ReactComponent as Img2} from "../images/img2.svg";
import {ReactComponent as Img3} from "../images/img3.svg";
import {ReactComponent as Img4} from "../images/img4.svg";
import "./LandingPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';


class LandingPage extends Component {

    handleClick = ()=>{
        const {history} = this.props;
        history.push("/intro");
    }

    render() {
        return (
            <>
            <Container>
                <Row className = "my-4">
                    <p className="landing-page-p" style = {{textAlign: "center"}}>Welcome to <span><p className="landing-page-p" style = {{color: "#4CC70D"}}>FINIT</p></span></p>
                </Row>
                <Row className = "my-5">
                    <Col>
                        <h2 className="landing-page-h2">
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
                        <h2 className="landing-page-h2">
                            We are here to provide you some tips for your investment journey🤩
                        </h2>
                    </Col>
                </Row>
                <Row className = "my-5">
                    <Col>
                        <h2 className="landing-page-h2">
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
                        <h2 className="landing-page-h2">
                            Want guidance of the veterans in this game? 😇 Grab a PREMIUM 
                        </h2>
                    </Col>
                </Row>
                <Row className = "my-5">
                    <Button onClick={this.handleClick} style = {{backgroundColor: "#11b411", color: "white",fontWeight:'500'}}>
                        Start investing with us here 👇🏼
                    </Button>
                </Row>
            </Container>
        </>
        );
    }
}

export default withRouter(LandingPage);


