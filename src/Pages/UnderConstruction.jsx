import React from "react";
import { ReactComponent as ReactLogo } from "../images/UnderConstruction.svg";
import "./UnderConstruction.css";
export default function UnderConstruction(){
    return(
        <div className = "wrapper">
            <p className="underCon-p-tag" style = {{fontWeight: "bolder", textAlign: "center", fontSize: "30px", marginTop: "5px"}}>Sorry to make you hear this,<br /> THE PAGE IS UNDER CONSTRUCTION</p>
            <ReactLogo className = "svg-image"/>
        </div>
    );
}