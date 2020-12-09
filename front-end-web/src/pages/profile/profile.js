import React,{ useState, useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faWallet, faPlus, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

import { api } from '../../services'
import toast from '../../services/toast'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card'
import CardContainer from '../../components/CardContainer'
import Form from '../../components/Form'
import Input from '../../components/Form/Input'
import Button from '../../components/Button';
import { Container } from './style.js';
import {Load} from '../../components/Load';


export default function Profile({ history }) {
    const user = useSelector((state) => state)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [onRequest, setOnRequest] = useState(false);
    const [wallets, setWallets] = useState([])    
    const [dataUser, setDataUser] = useState({})    
    const [dataWallet, setDataWallet] = useState({})    
    const [walletSelected, setWalletSelected] = useState('profile')  
    const dispatch = useDispatch()


    useEffect(() => {
        if(user.token === undefined){
            history.push('/login')
        }

        Promise.all([loadData()])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[onRequest])

    const loadData = () => {
        return new Promise (async (resolve, reject) => {
            try{

                const requestWallets = await api.get(`/user/wallets/${user.id}`)
                if(requestWallets.status === 200){
                    const { data } = requestWallets
                    setWallets(data)
                }


                const requestDataUser = await api.get(`/user/${user.id}`)
                if(requestDataUser.status === 200){
                    const { data } = requestDataUser
                    setDataUser(data)
                }


                resolve()
            }catch(err){
                reject(err)
            }
        })
    }

    const selectingWallet = (name) => {
        return new Promise(async (resolve, reject) => {
            try{
                const data = wallets.filter(row => row.name === name)
                setDataWallet({...data[0]})
                setWalletSelected(name)
                resolve()
            }catch(err){
                reject(err)
            }
        })
    }

    const selectingClassName = (name) => {
        if (walletSelected === name) return 'card card-selected'
        return 'card'
    }

    function handleSubmit(data, {reset}) {
        setOnRequest(true)
        return new Promise(async (resolve, reject) => {
            try{
                console.log(data)
                await api.post(`/wallet/${user.id}`, {
                    name: data.name,
                    description: data.description
                })

                toast('success', 'Carteira Criada')
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

    function handleSubmitUser(data, {reset}) {
        setOnRequest(true)
        return new Promise(async (resolve, reject) => {
            try{
                console.log(data)
                await api.put(`/user/${user.id}`, {
                    name: data.name,
                    tel: data.tel,
                    cpf_cnpj: data.document,
                    email: data.email,
                    profile: data.profile
                })

                toast('success', 'Registro Atualizado')
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

    function handleSubmitWallet(data, {reset}) {
        setOnRequest(true)
        return new Promise(async (resolve, reject) => {
            try{
                console.log(data)
                await api.put(`/wallet/${data.id}`, {
                    name: data.name,
                    description: data.description
                })

                toast('success', 'Registro Atualizado')
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

    const handleExit = () => {
        dispatch({ type: 'CLEAR', payload: null })
        history.push('/login')
      }

    return(
        <Container>
            <div>
                <Header />
                    <div className="profile">
                        <Card>
                            <CardContainer>
                                <Card                                           
                                    onClick={() => setWalletSelected('profile')}
                                    className={selectingClassName('profile')}>
                                    <div>
                                        <FontAwesomeIcon icon={faUserTie} size="2x"/>
                                    </div>
                                    <strong>
                                        Profile
                                    </strong>
                                </Card>
                                <Card                                           
                                    onClick={() => handleExit()}
                                    className={selectingClassName('exit')}>
                                    <div>
                                        <FontAwesomeIcon icon={faDoorOpen} size="2x"/>
                                    </div>
                                    <strong>
                                        Exit
                                    </strong>
                                </Card>
                                {
                                    wallets.length > 0 ? (
                                        wallets.map(row => (
                                        <Card 
                                            key={row.wallet_id}  
                                            onClick={() => selectingWallet(row.name)}
                                            className={selectingClassName(row.name)}>
                                            <div>
                                                <FontAwesomeIcon icon={faWallet} size="2x"/>
                                            </div>
                                            <strong>
                                                {row.name}
                                            </strong>
                                        </Card>
                                        ))
                                    ) : (
                                        <>
                                        </>
                                    )
                                }
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
                                                    border: "1px solid #ccc",
                                                    height: 'fit-content'
                                                }
                                            }
                                        }
                                        >                                
                                        <div className="box">
                                            <Form onSubmit={ handleSubmit } style={{display: 'block' }}>
                                            <Input name="name" label="Name" ></Input>
                                            <Input name="description" label="Description" ></Input>
                                                {
                                                    onRequest ? (
                                                        <Button type="submit" disabled><Load></Load></Button>
                                                    ) : (
                                                        <Button type="submit">Registrar</Button>
                                                    )
                                                }
                                            </Form>
                                        </div>
                                    </Modal>
                                </div>
                            </CardContainer>
                        </ Card>
                        <Card className="card-form">
                            {
                               walletSelected === 'profile' ? (
                                <div>
                                <Form onSubmit={ handleSubmitUser } className="form">
                                    <Input name="name" label="Name" defaultValue={dataUser.name}></Input>
                                    <Input name="tel" label="Tel" defaultValue={dataUser.tel}></Input>
                                    <Input name="document" label="Document" defaultValue={dataUser.cpf_cnpj}></Input>
                                    <Input name="email" label="Email" defaultValue={dataUser.email}></Input>
                                    <Input name="profile" label="Investor Profile" defaultValue={dataUser.profile}></Input>
                                    {
                                        onRequest ? (
                                            <Button type="submit" disabled><Load></Load></Button>
                                        ) : (
                                            <Button type="submit">Registrar</Button>
                                        )
                                    }
                                </Form>
                                </div>
                               ) : (
                                <div>
                                <Form onSubmit={ handleSubmitWallet } className="form" >
                                    <Input name="id" defaultValue={dataWallet.wallet_id} hidden></Input>
                                    <Input name="name" label="Name" defaultValue={dataWallet.name}></Input>
                                    <Input name="description" label="Description" defaultValue={dataWallet.description}></Input>
                                    {
                                        onRequest ? (
                                            <Button type="submit" disabled><Load></Load></Button>
                                        ) : (
                                            <Button type="submit">Registrar</Button>
                                        )
                                    }
                                </Form>
                                </div>
                               )
                            }

                        </ Card>
                    </div>
                <Footer />
            </div>
        </Container>
    )
}
