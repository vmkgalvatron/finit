import React, { Component } from 'react';
import './navbar.scss'
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class navbar extends Component {
    render() {
        return (
            
                <AppBar style={{backgroundColor:'rgb(17, 180, 17)'}} className="appbar" position="fixed">
                    <Toolbar>
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
                    </Toolbar>
                </AppBar>
                
           
        );
    }
}

export default navbar;