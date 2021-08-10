import React, { Component } from 'react';
import {Row, Col, Container, Navbar, NavItem} from 'react-bootstrap';
import SelectionCard from '../Components/selectionCard';

class InvestmentSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                <Container>
                    <Row>
                        {options.map(i=><Col><SelectionCard data={i}/></Col>)}
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default InvestmentSelection;