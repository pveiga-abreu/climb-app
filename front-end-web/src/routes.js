import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home/home.js';
import Start from './pages/start/start.js';
import Login from './pages/login/login.js';
import Wallet from './pages/wallet/wallet.js';
import Profile from './pages/profile/profile.js';
import Register from './pages/register/register.js';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Start } />
                <Route exact path="/home" component={ Home } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/wallet" component={ Wallet } />
                <Route exact path="/profile" component={ Profile } />
                <Route exact path="/register" component={ Register } />
            </Switch>
        </BrowserRouter>
    )
}
