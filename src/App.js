import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {
  Home,
  Blog,
  Myself,
  Detail
} from './Components'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Redirect exact to='/home' from='/'/>
            <Route path='/home' component={Home}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/myself' component={Myself}/>
            <Route exact path='/detail/post/:id' component={Detail}/>
        </Switch>
      </Router> 
    );
    
  }
}

export default App;
