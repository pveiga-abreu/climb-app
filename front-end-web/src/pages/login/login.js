import React, { useState, useEffect } from 'react';
import { Container } from './style.js';
import Footer from '../../components/Footer';
import Button from '../../components/Button/index.js';
import logo from '../../assets/logo.svg';

export default function Login() {
    const [loginInfo, setLoginInfo] = useState(0);

    useEffect(() => {
        console.log(loginInfo);
    }, [loginInfo])

    function handleSubmit(data) {
        setLoginInfo({
            login: data.login,
            password: data.password
        });
    }

    return(
        <Container>
            <div className="login-box">
                <img src={ logo } />
                <form onSubmit={ handleSubmit } className="form">
                    <label>E-Mail</label>
                    <input type="text" name="email" placeholder="Digite seu e-mail"/>
                    <label>Senha</label>
                    <input type="password" name="pwd" placeholder="Digite sua senha"/>
                    <Button type="submit" >Login</Button>
                </form>
            </div>
            <Footer />
        </Container>
    )
}
