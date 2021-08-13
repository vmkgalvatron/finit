import React, { Component } from 'react';
import {Row, Col, Container, NavItem,Nav} from 'react-bootstrap';
import SelectionCard from '../Components/selectionCard';
import { withRouter } from 'react-router-dom';
// import './si.scss';
import Navbar from '../Components/navbar';
import { useLocation } from "react-router-dom";



class InvestmentSelection extends Component {


    constructor(props) {
        super(props);
        this.state = { 
            card_ids:[],
         }
    }

    componentDidMount() {
        
       console.log(this.props);
        if(this.props.userName === 'Unknown'){
            const {history} = this.props;
            history.push("/intro");
        }
        window.addEventListener("beforeunload", this.alertUser);
        return () => {
          window.removeEventListener("beforeunload", this.alertUser);
        };
    }
    alertUser = (e) => {
        e.preventDefault();
        e.returnValue = "";
    };



    dataToRender = (i,itr)=>{
        // console.log(this.props.location.state);
        if(!this.props.location.state.isAbove18){
            if(i.title === 'Gold' || i.title === 'Fixed Deposit' || i.title === 'Savings'){
                return true;
            }
        }
        else{
            if(this.props.location.state.risk === 3){
                if(this.props.location.state.investment_period===1){
                    if( i.title === 'Currency Exchange' ||
                        i.title === 'Crypto Currency' || 
                    i.title === 'Share Market'){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===2){
                    if(i.title === 'Currency Exchange' ||
                        i.title === 'Crypto Currency' || 
                    i.title === 'Share Market' || 
                    i.title === 'Savings' || 
                    i.title === 'Gold'){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===3){
                    if(i.title === 'Currency Exchange' ||
                        i.title === 'Crypto Currency' 
                    || i.title === 'Share Market' ||
                     i.title === 'Real Estate' || 
                     i.title === 'Mutual Funds' || 
                     i.title === 'Royalties' || 
                     i.title === 'Fixed Deposit'){
                        return true;
                    }
                }
            }
            else if(this.props.location.state.risk === 2){
                if(this.props.location.state.investment_period===1){
                    if(i.title === 'Currency Exchange' ||
                        i.title === 'Real Estate' || 
                    i.title === 'Mutual Funds' || 
                    i.title === 'Royalties' || 
                    i.title === 'Gold' ||
                    i.title === 'Crypto Currency' ||
                    i.title === 'Share Market'
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===2){
                    if(i.title === 'Real Estate' || 
                    i.title === 'Mutual Funds' || 
                    i.title === 'Royalties' || 
                    i.title === 'Gold' ||
                    i.title === 'Savings'){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===3){
                    if(
                    i.title === 'Real Estate' || 
                    i.title === 'Mutual Funds' || 
                    i.title === 'Royalties' || 
                    i.title === 'Gold' || 
                     i.title === 'Fixed Deposit'){
                        return true;
                    }
                }
            }
            else{
                if(this.props.location.state.investment_period===1){
                    if(i.title === 'Currency Exchange' ||
                     i.title === 'Savings'||
                     i.title === 'Fixed Deposit'||   
                    i.title === 'Crypto Currency' ||
                    i.title === 'Share Market'
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===2){
                    if(
                    i.title === 'Savings'||
                    i.title === 'Fixed Deposit' 
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===3){
                    if(
                    i.title === 'Savings'||
                    i.title === 'Fixed Deposit' ||
                    i.title === 'Real Estate' || 
                    i.title === 'Mutual Funds' || 
                    i.title === 'Royalties'
                    ){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    
    render() {
        const options = [
            {title:'Savings',description:'The safest and most used investment option.',stability:'high',period:'flexible'},
            {title:'Real Estate',description:'Generally stable option with higher returns.',stability:'medium',period:'medium',},
            {title:'Share Market',description:'Highly volatile so great range of profits and loss.',stability:'low',period:'flexible',},
            {title:'Fixed Deposit',description:'Somewhat higher returns but long investment period',stability:'high',period:'long'},
            {title:'Mutual Funds',description:'Midway of share market and Bank!',stability:'medium',period:'medium'},
            {title:'Gold',description:'Less fluctuating market but have to look after it.',stability:'medium',period:'flexible'},
            {title:'Currency Exchange',decription:'',stability:'',period:'',},
            {title:'Crypto Currency',decription:'',stability:'',period:'',},
            {title:'Royalties',decription:'',stability:'',period:'',}
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
                        {options.map((i,itr)=>
                        <Col key={itr}>
                        {       
                                <SelectionCard
                                isEnable={(this.dataToRender(i,itr))===true?true:false}
                                key={itr}
                                data={i}  
                                id={itr}
                                title={options[itr].title}
                                />
                        }
                        </Col>)}
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default withRouter(InvestmentSelection);