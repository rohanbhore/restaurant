import React, { Component } from 'react';
import Order from './order'
import {Switch,Route} from 'react-router-dom'
import './App.css';
import Menu from './order';
import Report from './report';

class App extends Component {
  render() {
    return (
      
          <Switch>
              <Route exact path='/restaurant' component={Menu}/>
              <Route exact path='/Report' component={Report}/>
          </Switch>
    
    );
  }
}

export default App;
