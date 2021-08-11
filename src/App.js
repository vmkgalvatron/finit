
import './App.css';
import React, { useState } from 'react';
import Navbar from "./Components/navbar";
import Intro from './Pages/intro'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {createStore} from 'redux';
import reducers from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import LandingPage from './Pages/LandingPage';
import InvestmentSelectionPage from './Pages/investmentSelection';

const store = createStore(reducers,composeWithDevTools());

function App() {
  const [userName, setUserName] = useState('Unknown');
  return (
    <div className="App">
        <Router>
        <Navbar userName={userName}/>
          <Switch>
            <Route exact  path="/" component={()=><LandingPage/>}/>
            <Route  path="/intro" component={()=><Intro userName={userName} setUserName={setUserName}/>}/>
            {/* <Route   path="/form-page" component={()=><Form userName={userName} setUserName={setUserName}/>}/> */}
            <Route   path="/investment-selection-page" component={()=><InvestmentSelectionPage userName={userName} setUserName={setUserName}/>}/>
          </Switch>
        </Router>
    </div>
  );
}


export default App;
