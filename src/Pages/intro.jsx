import React, { Component } from 'react';
import './intro.scss';
import WarningIcon from '@material-ui/icons/Warning';
import { withRouter } from 'react-router-dom';



const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;



class intro extends Component {

    constructor(){
        super();
        this.state={
            amount:'',
            userName:'',
            markedCheackeBox:false,
            modalOpen:false,
            activateLink:false,
        }
    }
  

    handleChangeName = (event)=>{
        console.log(event.target.value);
        this.setState({userName:event.target.value,modalOpen:false});
        if(event.target.value.length>0)
            this.setState({activateLink:true});
        else
            this.setState({activateLink:false});
        
    }

    handleChangeAmount = (event)=>{
        if (rx_live.test(event.target.value))
            this.setState({amount:event.target.value});

    }


    handleSubmit = (event)=>{
        
        event.preventDefault();
        if(this.state.userName.length===0)
            this.setState({modalOpen:true});
        else{
            this.props.setUserName(this.state.userName);
        }
        const {history} = this.props;
        if(this.state.userName.length>0 && this.state.markedCheackeBox)
            history.push("/form-page");
        
    }

    handleClose=()=>{
        this.setState({modalOpen:false});
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

                    <div className="field">
                        <input
                        value={this.state.userName}
                        onChange = {this.handleChangeName}
                        placeholder="Enter Name"
                        className="input"/>
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
                        {/* {
                            !this.state.activateLink || !this.state.markedCheackeBox?'Submit':
                            <Link style={{textDecoration:'none',color:'white',height:'100px'}} to="/form-page">Submit</Link>
                        } */}
                        Submit
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(intro);