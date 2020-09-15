import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home/home.js';
import Start from './pages/start/start.js';
import Login from './pages/login/login.js';
import Wallet from './pages/wallet/wallet.js';
import Profile from './pages/profile/profile.js';
import Register from './pages/register/register.js';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={ Start } />
            <Route path="/home" exact component={ Home } />
            <Route path="/login" exact component={ Login } />
            <Route path="/wallet" exact component={ Wallet } />
            <Route path="/profile" exact component={ Profile } />
            <Route path="/register" exact component={ Register } />
        </BrowserRouter>
    )
}
