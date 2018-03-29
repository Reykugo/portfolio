import React from 'react';

import {Route} from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/login/LoginPage'
//import requireAuth from './utils/requireAuth';

const Routes = () =>{
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginPage}/>
        </div>
    )    
}

export default (Routes);