
import './App.css';
import React, { useState } from 'react';
import Navbar from "./Components/navbar";
import Intro from './Pages/intro'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import InvestmentSelectionPage from './Pages/investmentSelection';
import FinalPage from './Pages/final_page';
import UnderConstructionPage from './Pages/UnderConstruction';


function App() {
  const [userName, setUserName] = useState('Unknown');
  return (
    <div className="App">
        <Router>
        <Navbar userName={userName}/>
          <Switch>
            <Route exact  path="/" component={()=><LandingPage/>}/>
            <Route  path="/intro" component={()=><Intro userName={userName} setUserName={setUserName}/>}/>
            <Route   path="/investment-selection-page" component={()=><InvestmentSelectionPage userName={userName} setUserName={setUserName}/>}/>
            <Route   path="/final-page" component={()=><FinalPage userName={userName} setUserName={setUserName}/>}/>
            <Route   path="/underconstruction-page" component={()=><UnderConstructionPage userName={userName} setUserName={setUserName}/>}/>
          </Switch>
        </Router>
    </div>
  );
}


export default App;
