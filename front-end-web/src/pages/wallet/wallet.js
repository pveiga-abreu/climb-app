import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form } from '@unform/web';
import * as Yup from 'yup'; 

import { Container } from './style.js';
import Input from '../../components/Form/input/input.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Card from '../../components/Card';

import './modal.css';

export default function Wallet() {
    // Modal state
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleSubmit(data) {
        console.log(data);
    }

    return(
        <Container>
            <div>
                <Header />
                    <div className="wallet">
                        <Card className="i1">
                            Wallet 1
                        </ Card>
                        <Card className="i2">
                            Wallet 2
                        </ Card>
                        <Card className="i3">
                            Wallet 3
                            <Button onClick={ () => { setModalIsOpen(true) } }>+</Button>

                            <Modal 
                            isOpen={ modalIsOpen } 
                            onRequestClose={ ()  => { setModalIsOpen(false) }}
                            style={
                                {
                                    content: {
                                        top: '30px',
                                        left: '20%',
                                        right: '20%',
                                        bottom: '30px',
                                        background: "#fafafa",
                                        border: "1px solid #ccc"
                                    }
                                }
                            }
                            >
                                <div className="box">
                                    <Form onSubmit={ handleSubmit } className="form">
                                        <label>Input</label>
                                        <Input type="text" name="input1" placeholder="Input"/>
                                        <label>Input</label>
                                        <Input type="text" name="input2" placeholder="Input"/>
                                        <Button type="submit">Adicionar</Button>
                                    </Form>
                                </div>
                            </Modal>
                        </ Card>
                    </div>
                <Footer />
            </div>
        </Container>
    )
}
