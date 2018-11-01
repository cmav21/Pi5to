import React from 'react';
import {BrowserrRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../Components/Login';
import Consultas from '../Components/Consultas';
import Inicio from '../Components/inicio';
const routes = () =>{
    return(
        
        <Router>
            <Switch>
                <Route exact path = {'/'} component = {Login}/>
                <Route exact path = {'/Home'} component = {Inicio}/>
                <Route exact path = {'/consultas'} component = {Consultas}/>
            </Switch>
        </Router>
    );
};

export default routes;