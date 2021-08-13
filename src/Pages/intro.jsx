import React, { Component } from 'react';
import './intro.scss';
import WarningIcon from '@material-ui/icons/Warning';
import { withRouter } from 'react-router-dom';
import { Slider } from '@material-ui/core';
import {Card} from 'react-bootstrap';
import {ReactComponent as Image} from "../images/image4.svg";



const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;

const marks = [
    {
      value: 1,
      label: 'low',
    },
    {
        value: 2,
        label: 'medium',
      },
      {
        value: 3,
        label: 'high',
      },
  ];


  const period = [
    {
        value: 1,
        label: 'Short',
      },
      {
          value: 2,
          label: 'Medium',
        },
        {
          value: 3,
          label: 'Long',
        },
  ];



class intro extends Component {

    constructor(){
        super();
        this.state={
            amount:'',
            userName:'',
            markedCheackeBox:false,
            risk:1,
            investment_period:1,
            isAbove18:true,
        }
    }
  

    handleChangeName = (event)=>{
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
            history.push({pathname:"/investment-selection-page",state:{
                isAbove18:this.state.isAbove18,
                userName:this.state.userName,   
                risk:this.state.risk,
                investment_period:this.state.investment_period,
            }});
        
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




    render() {
        
        return (
            <div className="info-page">
                <Card className="card">
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

                    <div className="title-wrapper">
                            <div style={{fontSize:'20px',color:'black',marginLeft:'20px',marginTop:'20px'}}>Age ({(this.state.isAbove18)?`Above 18`:`Below 18`})</div>
                        </div>
                        <div className="age-toggle-wrapper">
                            <div onClick={()=>this.setState({isAbove18:true})} className={(this.state.isAbove18)?`activate`:`age-wrapper`}>Above 18</div>
                            <div onClick={()=>this.setState({isAbove18:false})} className={(!this.state.isAbove18)?`activate`:`age-wrapper`}>Below 18</div>
                        </div>
                        <div className="title-wrapper">
                            <div style={{fontSize:'20px',color:'black',marginLeft:'20px',marginTop:'20px'}}>Risk ({(this.state.risk === 1? `Low`:this.state.risk===2?`Medium`:`High`)})</div>
                        </div>
                        <Slider
                            className="slider"
                            style={{width:'85%',marginLeft:'25px',marginBottom:'20px'}}
                            value={this.state.risk}
                            onChange={this.handleChangeRiskSlider}
                            defaultValue={1}
                            min={1}
                            max={3}
                            steps={3}
                            marks={marks}
                            
                        />
                        <div className="title-wrapper">
                            <div style={{fontSize:'20px',color:'black',marginLeft:'20px',marginTop:'20px'}}>Investment Period ({this.state.investment_period === 1? `Short `:this.state.investment_period===2?`Medium `:`Long `} Period)</div>
                        </div>
                        <Slider
                            className="slider"
                            style={{width:'85%',marginLeft:'25px',marginBottom:'20px'}}
                            value={this.state.investment_period}
                            onChange={this.handleChangePeriodSlider}
                            defaultValue={1}
                            steps={3}
                            min={1}
                            max={3}
                            marks={period}

                        />

                    <div className="note">
                        <div className='note-logo'>
                            <div className="logo-wrapper">
                                <WarningIcon className="warning-logo"/>
                                <div className="warning-text">
                                    NOTE :-
                                </div>
                            </div>
                            <div className="note-and-box-wrapper">
                                <div className="check-box-wrapper">
                                    <input onClick={()=>this.setState({markedCheackeBox:!this.state.markedCheackeBox})} className="checkbox" type="checkbox"/>
                                </div>
                                <div className="note-text">
                                    Provided Information is based upon past performance,
                                    provided that it is not necessarily a guide to future performance. 
                                    Investment based solely upon the information provided by us is not suggested. 
                                    The losses are not entitled to us in any way, and hence it is advised that one must invest 
                                    at his/her own risk.
                                </div>

                            </div>
                            
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <div onClick={this.handleSubmit} className={(this.state.markedCheackeBox ? 'submit-button':'disabled-button')}>
                            Next
                        </div>
                    </div>
                </Card>
                <Image className="images"/>
                 
            </div>
        );
    }
}

export default withRouter(intro);