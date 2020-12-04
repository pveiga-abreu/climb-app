import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faWallet, faPlus } from '@fortawesome/free-solid-svg-icons'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card'
import CardContainer from '../../components/CardContainer'
import Form from '../../components/Form'
import Input from '../../components/Form/Input'
import Select from '../../components/Form/Select';
import Button from '../../components/Button';
import { Container } from './style.js';


export default function Profile({ history }) {
    const user = useSelector((state) => state)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if(user.token === undefined){
            history.push('/login')
        }
    },[history, user.token])

    function handleSubmit(data) {
        console.log(data);
    }

    return(
        <Container>
            <div>
                <Header />
                    <div className="profile">
                        <Card>
                            <CardContainer>
                                <Card>
                                    <div>
                                        <FontAwesomeIcon icon={faUserTie} size="2x"/>
                                    </div>
                                    <strong>
                                        Profile
                                    </strong>
                                </Card>
                                <Card>
                                    <div>
                                        <FontAwesomeIcon icon={faWallet} size="2x"/>
                                    </div>
                                    <strong>
                                        Wallet
                                    </strong>
                                </Card>
                                <Card>
                                    <div>
                                        <FontAwesomeIcon icon={faWallet} size="2x"/>
                                    </div>
                                    <strong>
                                        Wallet
                                    </strong>
                                </Card>
                                <div id="plus">
                                    <FontAwesomeIcon icon={faPlus} size="2x" onClick={ () => { setModalIsOpen(true) } }/>
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
                                                <Input type="text" name="input1" placeholder="Input" />
                                                <label>Input</label>
                                                <Input type="text" name="input2" placeholder="Input" />
                                                <label>Select</label>
                                                <Select name="select1" placeholder="Select" />
                                                <Button type="submit">Adicionar</Button>
                                            </Form>
                                        </div>
                                    </Modal>
                                </div>
                            </CardContainer>
                        </ Card>
                        <Card className="card-form">
                            <div>
                            <Form>
                                <Input name="name" label="Name"></Input>
                                <Input name="tel" label="Tel"></Input>
                                <Input name="document" label="Document"></Input>
                                <Input name="email" label="Email"></Input>
                                <Input name="profile" label="Investor Profile"></Input>
                            </Form>
                            </div>
                        </ Card>
                    </div>
                <Footer />
            </div>
        </Container>
    )
}
