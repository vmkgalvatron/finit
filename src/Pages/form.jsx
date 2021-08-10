import React, { Component } from 'react';
import './form.scss';
import { Slider } from '@material-ui/core';
import image2 from '../images/image2.png';
import { withRouter } from 'react-router-dom';

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

class form extends Component {
    constructor(){
        super();
        this.state={
            age:18,
            risk:50,
            expectations:50,
            investment_period:12,
        }
    }

    componentDidMount(){
        if(this.props.userName === 'Unknown'){
            const {history} = this.props;
            history.push("/intro");
        }

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

    handleSubmit = (event)=>{
        
        event.preventDefault();
        const {history} = this.props;
        history.push("/intro");
        
    }

    render() {
        return (
            <div className="form-page">
                <div className="page-wrapper">
                    <div className="image2-wrapper">
                        <img className="image2" src={image2} alt="image2"/>
                    </div>
                    <div className="card">
                        <div className="title-wrapper">
                            <div style={{fontSize:'20px',color:'black',marginLeft:'40px'}}>Age ({this.state.age})</div>
                        </div>
                        
                        <Slider
                            className="slider"
                            style={{width:'80%',margin:'10px'}}
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
                            style={{width:'80%',margin:'10px'}}
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
                            style={{width:'80%',margin:'10px'}}
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
                            style={{width:'80%',margin:'10px'}}
                            value={this.state.investment_period}
                            onChange={this.handleChangePeriodSlider}
                            defaultValue={12}
                            min={1}
                            max={120}
                            marks={period}
                            valueLabelDisplay="auto"
                        />
                        <div className="button-wrapper">
                            <div onClick={this.handleSubmit} className='submit-button'>
                                Next
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(form);