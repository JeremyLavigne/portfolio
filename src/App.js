import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Components
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import Interview from './components/Interview'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <Router>
      
      <Switch>

        <Route path="/interview">
          <NavBar />
          <Interview />
        </Route>

        <Route path="/portfolio">
          <NavBar />
          <Portfolio />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </Router>
  )
}

export default App
