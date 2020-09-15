import React, { useState, useEffect } from 'react';
import { Container } from './style.js';
import Footer from '../../components/Footer';
import Button from '../../components/Button/index.js';
import logo from '../../assets/logo.svg';

export default function Register() {
    const [registerInfo, setRegisterInfo] = useState(0);

    useEffect(() => {
        console.log(registerInfo);
    }, [registerInfo])

    function handleSubmit() {
        console.log("register");
    }

    return(
        <Container>
            <div className="register-box">
                <img src={ logo } />    
                <form onSubmit={ handleSubmit } className="form">
                    <label>Nome</label>
                    <input type="text" name="nome" placeholder="Digite seu nome"/>
                    <label>Telefone</label>
                    <input type="text" name="telefone" placeholder="Digite seu telefone"/>
                    <label>CPF/CNPJ</label>
                    <input type="text" name="cpf_cnpj" placeholder="Digite seu CPF ou CNPJ"/>
                    <label>E-Mail</label>
                    <input type="text" name="email" placeholder="Digite seu e-mail"/>
                    <label>Senha</label>
                    <input type="password" name="pwd" placeholder="Digite sua senha"/>
                    <label>Confime sua Senha</label>
                    <input type="password" name="pwd_confirm" placeholder="Confirme sua senha"/>
                    <Button type="submit" >Registrar</Button>
                </form>
            </div>
            <Footer />
        </Container>
    )
}
