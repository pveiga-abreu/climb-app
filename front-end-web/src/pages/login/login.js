import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container } from './style.js';
import Footer from '../../components/Footer';
import Button from '../../components/Button/index.js';
import logo from '../../assets/logo.svg';
import Input from '../../components/Form/input/input.js';

export default function Login() {

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email('Diite um e-mail válido').required('E-mail obrigatório'),
                pwd: Yup.string().min(6, 'Mínimo de 6 caracteres').required('Senha obrigatória')
            });

            await schema.validate(data, {
                abortEarly: false
            });

        } catch (err) {
            if(err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach(e => {
                    errorMessages[e.path] = e.message;
                });

                console.log(errorMessages);
                alert(errorMessages.pwd);
                reset();
            }
        }
    }

    return(
        <Container>
            <div className="login-box">
                <img src={ logo } />
                <Form onSubmit={ handleSubmit } className="form">
                    <label>E-mail</label>
                    <Input type="email" name="email" placeholder="Digite seu e-mail"/>
                    <label>Senha</label>
                    <Input type="password" name="pwd" placeholder="Digite sua senha"/>
                    <Button type="submit">Login</Button>
                </Form>
            </div>
            <Footer />
        </Container>
    )
}
