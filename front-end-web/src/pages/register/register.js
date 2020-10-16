import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';

import { Container } from './style.js';
import Footer from '../../components/Footer';
import Button from '../../components/Button/index.js';
import logo from '../../assets/logo.svg';
import Input from '../../components/Form/input/input.js';

export default function Register() {
    
    function handleSubmit(data) {
        console.log(data);
    }

    return(
        <Container>
            <div className="register-box">
                <img src={ logo } />    
                <Form onSubmit={ handleSubmit } className="form">
                    <label>Nome</label>
                    <Input type="text" name="nome" placeholder="Digite seu nome"/>
                    <label>Telefone</label>
                    <Input type="text" name="telefone" placeholder="Digite seu telefone"/>
                    <label>CPF/CNPJ</label>
                    <Input type="text" name="cpf_cnpj" placeholder="Digite seu CPF ou CNPJ"/>
                    <label>E-Mail</label>
                    <Input type="email" name="email" placeholder="Digite seu e-mail"/>
                    <label>Senha</label>
                    <Input type="password" name="pwd" placeholder="Digite sua senha"/>
                    <label>Confime sua Senha</label>
                    <Input type="password" name="pwd_confirm" placeholder="Confirme sua senha"/>
                    <Button type="submit" >Registrar</Button>
                </Form>
            </div>
            <Footer />
        </Container>
    )
}
