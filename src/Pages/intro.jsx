import React, { Component } from 'react';
import './intro.scss';
import WarningIcon from '@material-ui/icons/Warning';
import { withRouter } from 'react-router-dom';
import image1 from '../images/image1.png';



const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;



class intro extends Component {

    constructor(){
        super();
        this.state={
            amount:'',
            userName:'',
            markedCheackeBox:false,

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
            history.push("/form-page");
        
    }


    render() {
        
        return (
            <div className="info-page">
                <div className="card">
                    <div className="field">
                        <input
                        value={this.state.amount}
                        placeholder="Enter Amount"
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        maxLength={9}
                        onChange={this.handleChangeAmount}
                        className="input"/>
                    </div>
                    <div style={{width:'80%',display:'flex',justifyContent:'flex-start'}}>
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
                    <div style={{width:'80%',display:'flex',justifyContent:'flex-start',marginBottom:'10px'}}>
                        {
                            this.state.userName.length===0 && <div style={{color:'red'}}>Required</div>
                        }
                    </div>

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
                    <div onClick={this.handleSubmit} className={(this.state.markedCheackeBox ? 'submit-button':'disabled-button')}>
                        Submit
                    </div>
                </div>
                <div className="image1-wrapper">
                    <img className="image1" src={image1} alt="image1"/>
                </div>
            </div>
        );
    }
}

export default withRouter(intro);