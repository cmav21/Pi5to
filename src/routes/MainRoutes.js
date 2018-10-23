import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import HomePage from "../components/HomePage/HomePage"
import About from '../components/pages/About'
import SearchResult from '../components/SearchResult/SearchResult'
import ResourceDescription from '../components/Resources/ResourceDescription';
import ERROR404 from '../components/pages/404';
import UserLogin from '../components/Users/UserLogin/UserLogin';


const MainRoutes = () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/login' component={UserLogin}/>
        <Route exact path='/searchresult' component={SearchResult}/>
        <Route exact path='/resource/:id' component={ResourceDescription} />


        <Route component={ERROR404} />
      </Switch>
    </Router>
  )
}

export default MainRoutes;