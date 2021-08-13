import React, { Component } from 'react';
import './navbar.scss'
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {ReactComponent as Image} from "../images/crown.svg";
import { Link } from 'react-router-dom';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

class navbar extends Component {
  constructor(){
    super();
    this.state = {
      username:'',
    }
  }

  componentDidMount(){
    this.setState({
      username:this.props.userName
    });
  }


    render() {
        return (
            <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...this.props}>
            <AppBar style={{backgroundColor:'rgb(17, 180, 17)'}} className="appbar" >
                    <Toolbar>
                        <div className="nav">
                            <div className="left">
                                <div className="app-title"><Link style={{textDecoration:'none',color:'inherit'}} to="/">Finit</Link></div>
                            </div>
                    
                            <div className="right">
                              <Link style={{textDecoration:'none',color:'inherit'}} to="/underconstruction-page">
                                <div  className="primium-button">
                                  <div className="premium-button-text">
                                  <Image className="crown-image"/> Try Finit Premium
                                  </div>
                                </div>
                              </Link>
                                
                                <div className="avatar-wrapper">
                                <Avatar className="avatar">{(this.props.userName === 'Unknown'?`Un`:this.props.userName[0].toUpperCase())}</Avatar>
                                </div>
                                <div className="username"><Link style={{textDecoration:'none',color:'inherit'}} to="/intro">{this.props.userName}</Link></div>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
          </React.Fragment>
        );
    }
}

export default navbar;