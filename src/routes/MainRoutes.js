import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "../components/HomePage/HomePage"
import About from '../components/pages/About'


const MainRoutes = () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    </Router>
  )
}

export default MainRoutes;