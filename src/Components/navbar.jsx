import React, { Component } from 'react';
import './navbar.scss'
import Avatar from '@material-ui/core/Avatar';

class navbar extends Component {
    render() {
        return (
            <div className="nav">
                <div className="left">
                    <div className="app-title">Finit</div>
                </div>
               
               <div className="right">
                   <div className="avatar-wrapper">
                   <Avatar className="avatar">{(this.props.userName === 'Unknown'?`Un`:this.props.userName[0].toUpperCase())}</Avatar>
                   </div>
                   <div className="username">{this.props.userName}</div>
               </div>
            </div>
        );
    }
}

export default navbar;