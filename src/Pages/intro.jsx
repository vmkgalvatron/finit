import React, { Component } from 'react';
import './intro.scss';
import WarningIcon from '@material-ui/icons/Warning';
import { withRouter } from 'react-router-dom';
import image1 from '../images/image1.png';
import Navbar from '../Components/navbar';
import { Slider } from '@material-ui/core';
import {Card,Button,Container,ListGroup, ListGroupItem} from 'react-bootstrap';
import {ReactComponent as Image} from "../images/image3.svg";



const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;

const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

  const age = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 100,
      label: '100 yrs',
    },
  ];

  const period = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 120,
      label: '120 months',
    },
  ];



class intro extends Component {

    constructor(){
        super();
        this.state={
            amount:'',
            userName:'',
            markedCheackeBox:false,
            age:18,
            risk:50,
            expectations:50,
            investment_period:12,
        }
    }
  

    handleChangeName = (event)=>{
        console.log(event.target.value);
        this.setState({userName:event.target.value});
        
    }

    handleChangeAmount = (event)=>{
        if (rx_live.test(event.target.value))
            this.setState({amount:event.target.value});

    }


    handleSubmit = (event)=>{
        
        event.preventDefault();
        if(this.state.userName.length>0){
            this.props.setUserName(this.state.userName);
        }
        const {history} = this.props;
        if(this.state.userName.length>0 && this.state.markedCheackeBox)
            history.push("/investment-selection-page");
        
    }
    handleChangeSlider=(event,val)=>{
        this.setState({age:val});
    }

    handleChangeRiskSlider=(event,val)=>{
        this.setState({risk:val});
    }

    handleChangeExpectationsSlider=(event,val)=>{
        this.setState({expectations:val});
    }

    handleChangePeriodSlider=(event,val)=>{
        this.setState({investment_period:val});
    }

    HandleSubmit = (event)=>{
        
        event.preventDefault();
        const {history} = this.props;
        history.push("/investment-selection-page");
        
    }


    render() {
        
        return (
            <div className="info-page">
                {/* <Navbar userName={this.props.userName}/> */}
                <Card className="card">
                    <div className="field">
                        <input
                        value={this.state.amount}
                        placeholder="Enter Amount"
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        maxLength={9}
                        onChange={this.handleChangeAmount}
                        className="input"/>
                    </div>
                    <div style={{width:'80%',display:'flex',justifyContent:'flex-start',marginLeft:'20px'}}>
                        {
                            this.state.amount.length===0 && <div style={{color:'red'}}>Required</div>
                        }
                    </div>

                    <div className="field">
                        <input
                        value={this.state.userName}
                        onChange = {this.handleChangeName}
                        placeholder="Enter Name"
                        className="input"/>
                    </div>
                    <div style={{width:'80%',display:'flex',justifyContent:'flex-start',marginBottom:'10px',marginLeft:'20px'}}>
                        {
                            this.state.userName.length===0 && <div style={{color:'red'}}>Required</div>
                        }
                    </div>

                    <div className="title-wrapper">
                            <div style={{fontSize:'20px',color:'black',marginLeft:'40px'}}>Age ({this.state.age})</div>
                        </div>
                        
                        <Slider
                            className="slider"
                            style={{width:'80%',marginLeft:'20px',marginBottom:'20px'}}
                            value={this.age}
                            onChange={this.handleChangeSlider}
                            defaultValue={18}
                            min={1}
                            max={100}
                            marks={age}
                            valueLabelDisplay="auto"
                        />
                        <div className="title-wrapper">
                            <div style={{fontSize:'20px',color:'black',marginLeft:'40px',marginTop:'20px'}}>Risk ({this.state.risk}%)</div>
                        </div>
                        <Slider
                            className="slider"
                            style={{width:'80%',marginLeft:'20px',marginBottom:'20px'}}
                            value={this.state.risk}
                            onChange={this.handleChangeRiskSlider}
                            defaultValue={50}
                            min={1}
                            max={100}
                            marks={marks}
                            valueLabelDisplay="auto"
                        />
                        <div className="title-wrapper">
                            <div style={{fontSize:'20px',color:'black',marginLeft:'40px',marginTop:'20px'}}>Expectations ({this.state.expectations}%)</div>
                        </div>
                        <Slider
                            className="slider"
                            style={{width:'80%',marginLeft:'20px',marginBottom:'20px'}}
                            value={this.state.expectations}
                            onChange={this.handleChangeExpectationsSlider}
                            defaultValue={50}
                            min={1}
                            max={100}
                            marks={marks}
                            valueLabelDisplay="auto"
                        />
                        <div className="title-wrapper">
                            <div style={{fontSize:'20px',color:'black',marginLeft:'40px',marginTop:'20px'}}>Investment Period ({this.state.investment_period} months)</div>
                        </div>
                        <Slider
                            className="slider"
                            style={{width:'80%',marginLeft:'20px',marginBottom:'20px'}}
                            value={this.state.investment_period}
                            onChange={this.handleChangePeriodSlider}
                            defaultValue={12}
                            min={1}
                            max={120}
                            marks={period}
                            valueLabelDisplay="auto"
                        />

                    <div className="note">
                        <div className='note-logo'>
                            <div className="logo-wrapper">
                                <WarningIcon className="warning-logo"/>
                                <div className="warning-text">
                                    NOTE :-
                                </div>
                            </div>
                            <div className="note-text">
                                agree terms and conditions
                                <input onClick={()=>this.setState({markedCheackeBox:!this.state.markedCheackeBox})} className="checkbox" type="checkbox"/>
                            </div>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <div onClick={this.handleSubmit} className={(this.state.markedCheackeBox ? 'submit-button':'disabled-button')}>
                            Next
                        </div>
                    </div>
                </Card>
                {/* <div className="image1-wrapper">
                    <img className="image1" src={image1} alt="image1"/>
                </div> */}
                <Image className="images"/>
                 
            </div>
        );
    }
}

export default withRouter(intro);