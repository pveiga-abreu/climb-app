import React from 'react';
import Start from './pages/start/start.js';
import Home from './pages/home/home.js';
import Login from './pages/login/login.js';
import Register from './pages/register/register.js';
import Wallet from './pages/wallet/wallet.js';
import Profile from './pages/profile/profile.js';
import { BrowserRouter, Route } from 'react-router-dom';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={ Start } />
            <Route path="/home" exact component={ Home } />
            <Route path="/login" exact component={ Login } />
            <Route path="/register" exact component={ Register } />
            <Route path="/wallet" exact component={ Wallet } />
            <Route path="/profile" exact component={ Profile } />
        </BrowserRouter>
    )
}
