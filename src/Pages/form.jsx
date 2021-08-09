import React, { Component } from 'react';
import './form.scss';
import { Slider } from '@material-ui/core';

class form extends Component {
    constructor(){
        super();
        this.state={
            age:18,
            risk:50,
        }
    }

    handleChangeSlider=(event,val)=>{
        this.setState({age:val});
    }

    handleChangeRiskSlider=(event,val)=>{
        this.setState({risk:val});
    }

    render() {
        return (
            <div className="form-page">
                <div className="card">
                    <div style={{fontSize:'20px',color:'black',marginLeft:'20px'}}>Age</div>
                    <Slider
                        className="slider"
                        style={{width:'80%',margin:'10px'}}
                        value={this.age}
                        onChange={this.handleChangeSlider}
                        defaultValue={18}
                        min={1}
                        max={100}
                        valueLabelDisplay="auto"
                    />
                    <div style={{fontSize:'20px',color:'black',marginLeft:'20px'}}>Risk</div>
                    <Slider
                        className="slider"
                        style={{width:'80%',margin:'10px'}}
                        value={this.state.risk}
                        onChange={this.handleChangeRiskSlider}
                        defaultValue={50}
                        min={1}
                        max={100}
                        valueLabelDisplay="auto"
                    />
                </div>
            </div>
        );
    }
}

export default form;