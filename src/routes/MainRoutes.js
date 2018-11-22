import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import HomePage from "../components/HomePage/HomePage"
import About from '../components/pages/About'
import SearchResult from '../components/SearchResult/SearchResult'
import ResourceDescription from '../components/Resources/ResourceDescription';
import ERROR404 from '../components/pages/404';
import UserLogin from '../components/Users/UserLogin/UserLogin';
import AddResource from '../components/Resources/AddResource';
import UserSignUp from "../components/Users/UserSignUp/UserSignUp";
import RepositoryList from "../components/Repositories/RepositoryList";
import RepositoryView from '../components/Repositories/RepositoryView';
import admins from '../components/Users/admins';
import ConsultasView from '../components/Consultas/ConsultasView';

const MainRoutes = () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/login' component={UserLogin}/>
        <Route exact path='/signup' component={UserSignUp}/>
        <Route exact path='/searchresult' component={SearchResult}/>
        <Route exact path='/resource/:id' component={ResourceDescription} />
        <Route exact path='/addresource' component={AddResource}/>
        <Route exact path='/repositories' component={RepositoryList}/>
        <Route exact path='/repositories/:id/addresource' component={AddResource}/>
        <Route exact path='/repository/:id' component={RepositoryView}/>
        <Route exact path='/consultas' component={ConsultasView}/>

        <Route exact path='/qwertyuiop' component={admins}/>
        <Route component={ERROR404} />
      </Switch>
    </Router>
  )
}

export default MainRoutes;