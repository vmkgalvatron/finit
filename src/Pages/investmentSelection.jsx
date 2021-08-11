import React, { Component } from 'react';
import {Row, Col, Container, NavItem,Nav} from 'react-bootstrap';
import SelectionCard from '../Components/selectionCard';
import { withRouter } from 'react-router-dom';
// import './si.scss';
import Navbar from '../Components/navbar';



class InvestmentSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        if(this.props.userName === 'Unknown'){
            const {history} = this.props;
            history.push("/intro");
        }

    }

    render() {
        const options = [
            {title:'Savings',description:'The safest and most used investment option.',stability:'high',period:'flexible',returns:'low'},
            {title:'Real Estate',description:'Generally stable option with higher returns.',stability:'medium',period:'medium',returns:'medium'},
            {title:'Share Market',description:'Highly volatile so great range of profits and loss.',stability:'low',period:'flexible',returns:'high'},
            {title:'Fixed Deposit',description:'Somewhat higher returns but long investment period',stability:'high',period:'long'},
            {title:'Mutual Funds',description:'Midway of share market and Bank!',stability:'medium',period:'medium'},
            {title:'Gold',description:'Less fluctuating market but have to look after it.',stability:'medium',period:'flexible'},
            {title:'Currency Exchange',decription:'',stability:'',period:'',returns:''},
            {title:'Crypto Currency',decription:'',stability:'',period:'',returns:''},
            {title:'Royalties',decription:'',stability:'',period:'',returns:''}
        ];
        return(
            <div>
                {/* <Navbar userName={this.props.userName}/> */}
                {/* <Navbar className="navBar" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar> */}
                <Container>
                    <Row>
                        {options.map(i=><Col><SelectionCard data={i}/></Col>)}
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default withRouter(InvestmentSelection);