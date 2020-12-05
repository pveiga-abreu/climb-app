import React, { useState, useEffect } from 'react';

import { api } from '../../services'
import toast from '../../services/toast'

import { Container } from './style.js';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import logo from '../../assets/logo.svg';
import Input from '../../components/Form/Input';
import Form from '../../components/Form'
import {Load} from '../../components/Load';


export default function Register({ history }) {
    const [onRequest, setOnRequest] = useState(false);
    
    function handleSubmit(data, {reset}) {
        setOnRequest(true)
        return new Promise(async (resolve, reject) => {
            try{
                await api.post(`/user/register`, {
                    name: data.name,
                    tel: data.tel,
                    cpf_cnpj: data.document,
                    email: data.email,
                    password: data.password,
                    profile: 'moderado'
                })

                history.push('/login')

                toast('success', 'Cadastro Realizado')
                setOnRequest(false)
                reset()
                resolve()
            }catch(err){
                toast('error', 'Erro Interno, Tente Novamente')
                setOnRequest(false)
                reset()
                reject(err)
            }
        })
    }

    return(
        <Container>
            <div className="register-box">
                <img src={ logo } alt="logo"/>    
                <Form onSubmit={ handleSubmit } className="form">
                    <Input label="Nome" type="text" name="name" placeholder="Digite seu nome"/>
                    <Input label="Telefone" type="text" name="tel" placeholder="Digite seu telefone"/>
                    <Input label="CPF/CNPJ" type="text" name="document" placeholder="Digite seu CPF ou CNPJ"/>
                    <Input label="Email"type="email" name="email" placeholder="Digite seu e-mail"/>
                    <Input label="Senha" type="password" name="password" placeholder="Digite sua senha"/>
                    {
                        onRequest ? (
                            <Button type="submit" disabled><Load></Load></Button>
                        ) : (
                            <Button type="submit">Registrar</Button>
                        )
                    }
                </Form>
            </div>
            <Footer />
        </Container>
    )
}
