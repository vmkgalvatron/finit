
import './App.css';
import React, { useState } from 'react';
import Navbar from "./Components/navbar";
import Intro from './Pages/intro'
import Form from './Pages/form'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {createStore} from 'redux';
import reducers from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import {connect} from 'react-redux';

const store = createStore(reducers,composeWithDevTools());

function App() {
  const [userName, setUserName] = useState('Unknown');
  return (
    <div className="App">
        <Navbar userName={userName}/>
        <Router>
          <Switch>
            <Route exact path="/" component={()=><Intro userName={userName} setUserName={setUserName}/>}/>
            <Route  path="/form-page" component={()=><Form userName={userName} setUserName={setUserName}/>}/>
          </Switch>
        </Router>
    </div>
  );
}


export default App;
