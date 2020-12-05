import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux'
import jwt from 'jsonwebtoken'
import * as Yup from 'yup';

import {api} from '../../services';
import toast from '../../services/toast'


import Footer from '../../components/Footer';
import {Load} from '../../components/Load';
import {Button, ContainerButton} from '../../components/Button';
import logo from '../../assets/logo.svg';
import Input from '../../components/Form/Input';
import Form from '../../components/Form';

import { Container } from './style';

export default function Login({ history }) {
  const formLogin = useRef(null)
  const [onRequest, setOnRequest] = useState(false)
  const dispatch = useDispatch()


    function handleSubmit(data, { reset }) {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = Yup.object().shape({
                    email: Yup.string()
                        .email('Diite um e-mail válido')
                        .required('E-mail obrigatório'),
                    password: Yup.string()
                        .required('Senha obrigatória')
                })
    
                await schema.validate(data, {
                    abortEarly: false
                });

                try{
                    setOnRequest(true)
                    const request = await api.post(`/user/login`, {
                        email: data.email, 
                        password: data.password 
                    })
                    if (request.status === 200) {
                        const { token } = request.data
                        const {id, name, profile } = jwt.decode(token) 


                        const user = {
                            token: token,
                            id: id,
                            name: name,
                            profile: profile
                        }
                        dispatch({ type: 'USER_LOGIN', payload: user })
                        history.push('/wallet')
                      }


                    setOnRequest(false)
                    resolve()
                }catch(err){
                    toast('error', 'Valide Seus Dados Cadastrais')
                    setOnRequest(false)
                    reject(err)
                }
    
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errorMessages = {}
            
                    err.inner.forEach(error => {
                      errorMessages[error.path] = error.message
                    })
                    formLogin.current.setErrors(errorMessages)
                  }
            }
        })
    }

    return(
        <Container>
            <div className="login-box">
                <img src={ logo } alt=""/>
                <Form ref={formLogin} onSubmit={ handleSubmit } className="form">
                    <Input label="E-mail" type="email" name="email" placeholder="Digite seu e-mail"/>
                    <Input label="Senha" type="password" name="password" placeholder="Digite sua senha"/>
                    <ContainerButton>
                    {
                        onRequest ? (
                            <Button type="submit" disabled><Load></Load></Button>
                        ) : (
                            <Button type="submit">Login</Button>
                        )
                    }
                    </ContainerButton>
                    <strong onClick={() => history.push('/register')}>Registre-se</strong>

                    
                </Form>
            </div>
            <Footer />
        </Container>
    )
}
