import React, { useState,useEffect } from 'react'
import './App.css'
import UserDetails from "./UserDetails"
import Home from './Home'
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/details" component = {UserDetails}/>
      </Switch>
    </Router>
  )
}

export default App
