import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import SelectionCard from '../Components/selectionCard';
import { withRouter } from 'react-router-dom';



class InvestmentSelection extends Component {


    constructor(props) {
        super(props);
        this.state = { 
            card_ids:[],
         }
    }

    componentDidMount() {
        
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
        if(!this.props.location.state.isAbove18){ 
            if(this.props.location.state.risk === 3){
                if(this.props.location.state.investment_period===1){
                    if(
                        i.title === 'Gold' 
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===2){
                    if(
                        i.title === 'Gold' 
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===3){
                    if(

                        i.title === 'Gold' 
                    ){
                        return true;
                    }
                }
            }
            else if(this.props.location.state.risk === 2){
                if(this.props.location.state.investment_period===1){
                    if(

                        i.title === 'Gold' 
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===2){
                    if(
                        i.title === 'Savings' ||
                        i.title === 'Gold' 
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===3){
                    if(
                        i.title === 'Savings' ||
                        i.title === 'Fixed Deposit' || 
                        i.title === 'Gold' 
                    ){
                        return true;
                    }
                }
            }
            else{
                if(this.props.location.state.investment_period===1){
                    if(
                        i.title === 'Savings' 
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===2){
                    if(
                        i.title === 'Savings' ||
                        i.title === 'Fixed Deposit'
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===3){
                    if(
                        i.title === 'Savings' ||
                        i.title === 'Fixed Deposit' || 
                        i.title === 'Gold'
                    ){
                        return true;
                    }
                }
            }
        }
        else{
            if(this.props.location.state.risk === 3){
                if(this.props.location.state.investment_period===1){
                    if(
                        i.title === 'Share Market' ||
                        i.title === 'Currency Exchange' || 
                        i.title === 'Crypto Currency' 
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===2){
                    if(
                        i.title === 'Share Market' ||
                        i.title === 'Currency Exchange' || 
                        i.title === 'Crypto Currency' ||
                        i.title === 'Royalties'
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===3){
                    if(
                        i.title === 'Share Market' ||
                        i.title === 'Currency Exchange' || 
                        i.title === 'Crypto Currency' ||
                        i.title === 'Royalties' ||
                        i.title === 'Mutual Funds' 
                    ){
                        return true;
                    }
                }
            }
            else if(this.props.location.state.risk === 2){
                if(this.props.location.state.investment_period===1){
                    if(
                        i.title === 'Share Market' ||
                        i.title === 'Gold' ||
                        i.title === 'Currency Exchange' 
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===2){
                    if(
                        i.title === 'Share Market' ||
                        i.title === 'Royalties' ||
                        i.title === 'Real Estate'
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===3){
                    if(
                        i.title === 'Real Estate'||
                        i.title === 'Fixed Deposit' || 
                        i.title === 'Mutual Funds' ||
                        i.title === 'Royalties'
                    ){
                        return true;
                    }
                }
            }
            else{
                if(this.props.location.state.investment_period===1){
                    if(
                        i.title === 'Savings' ||
                        i.title === 'Fixed Deposit'
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===2){
                    if(
                        i.title === 'Savings' ||
                        i.title === 'Mutual Funds' ||
                        i.title === 'Gold' 
                    ){
                        return true;
                    }
                }
                else if(this.props.location.state.investment_period===3){
                    if(
                        i.title === 'Savings' ||
                        i.title === 'Real Estate'||
                        i.title === 'Fixed Deposit' || 
                        i.title === 'Mutual Funds' ||
                        i.title === 'Gold' 
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
            {title:'Currency Exchange',decription:'The value of currencies fluctuate from time to time according too each other. The same fluctuation is used to invest money.',stability:'medium',period:'medium',},
            {title:'Crypto Currency',decription:'Crypto currency is decentralised digital currency based on the blockchain phenomena.',stability:'low',period:'low',},
            {title:'Royalties',decription:'A royalty is a monetary compensation paid to the owner of an asset (often an intellectual property).',stability:'high',period:'long',}
        ];
        return(
            <div>
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