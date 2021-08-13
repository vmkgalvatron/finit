import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Collapse
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';


var p = "data:image/png;base64,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";



class Accordian extends Component {

  constructor(){
    super();
    this.state={
      toggleQuestion:1,
      images:[],
    }
  }

  componentDidMount(){
    console.log("id = ",this.props.location.state.id);
    let temp = [];
    temp.push(img1);
    temp.push(img2);
    temp.push(img3);
    temp.push(img4);
    temp.push(img5);
    temp.push(img6);
    temp.push(img7);
    temp.push(img8);
    temp.push(img9);

    this.setState({images:temp});
    // console.log("final")
    // console.log(this.props);
    window.addEventListener("beforeunload", this.alertUser);
        return () => {
          window.removeEventListener("beforeunload", this.alertUser);
    };
    
    

  }


  a = {
    title: "bank savings",
    "title-text" : "Once we put our money in the bank accounts, the bank gives us certain interest rate on saving. The phenomenon is used in the investment in saving.",
    suggestions: [
      "Saving in the bank is considerd as most safe and risk free option of the investment.",
      "The interest rates in the banks may vary countrywise and bankwise also.",
      "Since there is very less risk invloved in this investment, returns might not be much invigorating."
    ],
    facts: [
      "Venezuela is the country having highest interest rate among all other countries.(57%)",
      "Switzerland is the county having lowest interest rate among all other countries. (-0.75%)"
    ],
    links: ["https://www.wishfin.com/savings-account-interest-rates/"],
    notes: [
      "The figures given here are of the February 2021 and may change in the future.",
      "The figures given above are of the central bank of respective nations."
    ]
  };

  render() {
    return (
      <>
      {/* <Container> */}
      <div style={{height:'100vh'}} className="container-fluid">
      <div style={{height:'20%'}} className="my-3">
        <img style={{width:'100%',height:'100%'}} src = {this.state.images[this.props.location.state.id]} /> 
        </div>
        <Row className="my-3">
          <Col className="mx-2">
            <img style={{width:'100%'}} src = {p} /> 
          </Col> 
          <Col className="mx-2">
            <Card>
              <CardHeader onClick={() => this.setState({toggleQuestion:1})}>
                <span className="font-weight-bold">
                  What you are investing in?
                </span>
              </CardHeader>
              <Collapse isOpen={this.state.toggleQuestion === 1 ? true : false}>
                <CardBody>{this.a["title-text"]}</CardBody>
              </Collapse>
            </Card>

            <Card>
              <CardHeader onClick={() => this.setState({toggleQuestion:2})}>
                <span className="font-weight-bold">Some Suggestions!!!</span>
                <span
                  style={{ float: "right", backgroundColor: "#4cc70d" }}
                  className="badge badge-primary badge-pill"
                >
                  {this.a["suggestions"].length}
                </span>
              </CardHeader>
              <Collapse isOpen={this.state.toggleQuestion === 2 ? true : false}>
                <CardBody>
                  <ul>
                    {this.a["suggestions"].map((i,itr) => {
                      return (
                        <li key={itr}>
                          <p>{i}</p>
                        </li>
                      );
                    })}
                  </ul>
                </CardBody>
              </Collapse>
            </Card>
            <Card>
              <CardHeader onClick={() => this.setState({toggleQuestion:3})}>
                <span className="font-weight-bold">Why not some Facts!!!</span>
                <span
                  style={{ float: "right", backgroundColor: "#4cc70d" }}
                  className="badge badge-primary badge-pill"
                >
                  {this.a["facts"].length}
                </span>
              </CardHeader>
              <Collapse isOpen={this.state.toggleQuestion === 3 ? true : false}>
                <CardBody>
                  <ul>
                    {this.a["facts"].map((i,itr) => {
                      return (
                        <li key={itr}>
                          <p>{i}</p>
                        </li>
                      );
                    })}
                  </ul>
                </CardBody>
              </Collapse>
            </Card>
            <Card>
              <CardHeader onClick={() => this.setState({toggleQuestion:4})}>
                <span className="font-weight-bold">
                  Head over for starting investment and exploration👇🏼
                </span>
                <span
                  style={{ float: "right", backgroundColor: "#4cc70d" }}
                  className="badge badge-primary badge-pill"
                >
                  {this.a["links"].length}
                </span>
              </CardHeader>
              <Collapse isOpen={this.state.toggleQuestion === 4 ? true : false}>
                <CardBody>
                  <ul>
                    {this.a["links"].map((i,itr) => {
                      return (
                        <li key={itr}>
                          <a
                            href={i}
                            target="_blank"
                            style={{ color: "#4cc70d" }}
                          >
                            {" "}
                            Link#{this.a["links"].indexOf(i) + 1}{" "}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </CardBody>
              </Collapse>
            </Card>
            <Card>
              <CardHeader onClick={() => this.setState({toggleQuestion:5})}>
                <span className="font-weight-bold">Note</span>
                <span
                  style={{ float: "right", backgroundColor: "#4cc70d" }}
                  className="badge badge-primary badge-pill"
                >
                  {this.a["notes"].length}
                </span>
              </CardHeader>
              <Collapse isOpen={this.toggleQuestion === 5 ? true : false}>
                <CardBody>
                  <ul>
                    {this.a["notes"].map((i,itr) => {
                      return (
                        <li key={itr}>
                          <p>{i}</p>
                        </li>
                      );
                    })}
                  </ul>
                </CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </div>
        
      {/* </Container> */}
    </>
    );
  }
}


export default withRouter(Accordian);
