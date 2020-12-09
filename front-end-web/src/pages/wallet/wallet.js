import React, { useState, useEffect, PureComponent} from 'react';
import { useSelector } from 'react-redux'
import Modal from 'react-modal';


import { Form } from '@unform/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faEye, faEyeSlash,faPlus, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { PieChart, Pie, Cell, Sector } from 'recharts'

import { api } from '../../services'
import toast from '../../services/toast'


import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Label from '../../components/Header/Label';
import CardContainer from '../../components/CardContainer'
import Table from '../../components/Table'
import { Container } from './style.js';
import {Load} from '../../components/Load';


export default function Wallet({ history }) {
    const user = useSelector((state) => state)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [onRequest, setOnRequest] = useState(false);
    const [hideValue, setHideValue] = useState(false);
    const [wallets, setWallets] = useState([])    
    const [tickers, setTickers] = useState([])
    const [walletSelected, setWalletSelected] = useState(null)    
    const [valueWallet, setValueWallet] = useState(null)
    const [dataGraficDivision, setDataGraficDivision] = useState([])
    const [dataGrafic, setDataGrafic] = useState([])
    const [lastMoviment, setLastMoviment] = useState({})
    const [optionTickers, setOptionTickers] = useState([])
    const [optionTypeOrder, setOptionTypeOrder] = useState([
        {
            label: 'Compra',
            value: 'B'
        },
        {
            label: 'Venda',
            value: 'S'
        }
    ])

    useEffect(() => {
        if(user.token === undefined){
            history.push('/login')
        }
        

        Promise.all([loadData(), loadOptions()])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const loadData = (id) => {
        setOnRequest(true)
        return new Promise (async (resolve, reject) => {
            try{

                let selected = 0;
                if(id === undefined){
                    const requestWallets = await api.get(`/user/wallets/${user.id}`)
                    if(requestWallets.status === 200){
                        const { data } = requestWallets
                        selected = data[0].wallet_id
                        setWalletSelected(data[0].wallet_id)
                        setWallets(data)
                    }
                }else {
                    setTickers([])
                    setValueWallet(null)
                    setDataGrafic([])
                    setDataGraficDivision([])
                    setLastMoviment({})
                    selected = id 
                }


                const requestTickers = await api.get(`/wallet/${selected}`)
                if(requestTickers.status === 200 && requestTickers.data.assets !== null){
                    const { assets } = requestTickers.data
                    setTickers(assets)
                    const total = assets.reduce( (acc, cur) => {
                        return acc + cur.total;
                    }, 0);
                    setValueWallet(total)

                    const grafic = assets.map(row => {
                        return {
                            name: row.ticker, 
                            value: row.total 
                        }
                    })
                    const graficDivision = assets.map(row => {
                        return {
                            name: row.ticker, 
                            value: row.quotas 
                        }
                    })
                    setDataGrafic(grafic)
                    setDataGraficDivision(graficDivision)
                }

                const requestLastMoviment = await api.get(`/record/last/${selected}`)
                if(requestLastMoviment.status === 200 ){
                    const { data } = requestLastMoviment
                    setLastMoviment(data)
                }

                setOnRequest(false)
                resolve()
            }catch(err){
                setOnRequest(false)
                reject(err)
            }
        })
    }

    const loadOptions = () => {
        return new Promise( async (resolve, reject) => {
            try{
                
                const request = await api.get(`/ticker`)
                if(request.status === 200){
                    const { data } = request
                    const listOptions = data.map(row => {
                        return {
                            label: row.ticker,
                            value: row.ticker
                        }
                    })
                    setOptionTickers(listOptions)
                }
                resolve()
            }catch(err){
                reject(err)
            }
        })
    }


    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
       const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
    

    function handleSubmit(data, {reset}) {
        setOnRequest(true)
        return new Promise(async (resolve, reject) => {
            try{

                const price = parseFloat(data.price.replace(',', '.'))

                await api.post(`record/${walletSelected}`,  {
                    ticker: data.ticker,
                    price: price,
                    quotas: +data.quotas,
                    type: data.type
                })
                
                toast('success', 'Registrado com Sucesso')
                setOnRequest(false)
                reset()
                resolve()
            }catch(err){
                setOnRequest(false)
                toast('error', 'Erro Interno, Tente Novamente')
                reset()
                reject(err)
            }
        })
    }

    const validatePercent = (value) => {
        if(value === null) return 'positive-balance'
        let signal = value.toString().substring(0,1)
        if(signal === '-'){
            return 'negative-balance'
        }
        return 'positive-balance'

    }

    const selectingWallet = (id) => {
        return new Promise(async (resolve, reject) => {
            try{
                setWalletSelected(id)
                loadData(id)
                resolve()
            }catch(err){
                reject(err)
            }
        })
    }

    const selectingClassName = (id) => {
        if (walletSelected === id) return 'card card-selected'
        return 'card'
    }

    const formatString = (data, type) => {
        if(data !== undefined && data !== null){

            if(type === 'order_type'){
                if(data === 'B') return 'Compra'
                if(data === 'S') return 'Venda'
            }

            if(type === 'date'){
                const dateFormated = data.split('-')
                return  dateFormated[2] + '/' + dateFormated[1] + '/' + dateFormated[0]
            }

            if(type === 'price'){
                return 'R$' + data
            }
        }
    }


    return(
        <Container>
                <Header />

                    <CardContainer id="container-wallet" >
                        {
                            wallets.length > 0 ? (
                                wallets.map(row => (
                                <Card 
                                    key={row.wallet_id}  
                                    onClick={() => selectingWallet(row.wallet_id)}
                                    className={selectingClassName(row.wallet_id)}>
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
                                {
                                    onRequest ? (
                                        <Load></Load>
                                    ) : (
                                        <>
                                        <FontAwesomeIcon icon={faBoxOpen} size="2x" />
                                        </>
                                    )
                                }
                                </>
                            )
                        }
                    </CardContainer>

                        <div className="wallet">

                        <div id="div-top">
                            <div>
                                {
                                    tickers.length > 0 ? (
                                        tickers.map((row,index) => (
                                        <Card key={index}>
                                            <h5>{row.ticker}</h5>
                                            <span className={validatePercent(row.result_percent)}>{row.result_percent === null ? '0%'  : row.result_percent.toFixed(2) +'%'}</span>
                                            <strong>R$ {row.actual_price}</strong>
                                            <p>{row.quotas} cotas</p>
                                            <span id="location-chart" style={{background: COLORS[index]}}></span>
                                        </Card>
                                        ))
                                    ) : (
                                        <>
                                        {
                                            onRequest ? (
                                                <Load></Load>
                                            ) : (
                                                <>
                                                Não há investimento
                                                </>
                                            )
                                        }
                                        </>
                                    )
                                }
                            </div>
                        </div>


                            <div id="div-middle">
                                <Card className="mini-card">
                                    <div>
                                        <Label>Total</Label>
                                        <FontAwesomeIcon cursor="pointer" icon={hideValue ? faEyeSlash : faEye} size="1x" onClick={ () => setHideValue(!hideValue) }/>
                                    </div>
                                    <div>
                                        {hideValue ? (
                                                <strong>
                                                    -
                                                </strong>
                                            ) : (
                                                <strong>
                                                {
                                                    onRequest ? (
                                                        <Load></Load>
                                                    ) : (
                                                        <>
                                                        {valueWallet === null ? 0 : `R$ ${valueWallet.toFixed(2)}`}
                                                        </>
                                                    )
                                                }
                                                </strong>
                                            )}
                                    </div>
                                </Card>
                                <Card>
                                    <div>
                                    <h4>Divisão por Cotas</h4>
                                    {
                                        dataGraficDivision.length > 0 ? (
                                        <PieChart width={200} height={200}>
                                            <Pie
                                                data={dataGraficDivision}
                                                cx={100}
                                                cy={100}
                                                startAngle={180}
                                                endAngle={0}
                                                innerRadius={60}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                paddingAngle={5}
                                                dataKey="value"
                                                >
                                                {
                                                    dataGraficDivision.length > 0 
                                                    ? dataGraficDivision.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                                    : <Load></Load>
                                                }
                                            </Pie>
                                        </PieChart>
                                        ) : (
                                            <>
                                            {
                                                onRequest ? (
                                                    <Load></Load>
                                                ) : (
                                                    <>
                                                    -
                                                    </>
                                                )
                                            }
                                            </>
                                        )
                                    }
                                    </div>
                                    <div>
                                    <h4>Divisão do Patrimônio</h4>
                                    {
                                        dataGrafic.length > 0 ? (
                                        <PieChart width={200} height={200}>
                                            <Pie
                                              data={dataGrafic}
                                              cx={100}
                                              cy={100}
                                              labelLine={false}
                                              label={renderCustomizedLabel}
                                              outerRadius={80}
                                              fill="#8884d8"
                                              dataKey="value"
                                            >
                                              {
                                                dataGrafic.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                              }
                                            </Pie>
                                          </PieChart>
                                        ) : (
                                            <>
                                            {
                                                onRequest ? (
                                                    <Load></Load>
                                                ) : (
                                                    <>
                                                    -
                                                    </>
                                                )
                                            }
                                            </>
                                        )
                                    }
                                    </div>
                                </Card>
                            </ div>

                            <div id="div-down">
                                <Card >
                                    <Label >Última Movimentação</Label>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Data</th>
                                                <th>Ticker</th>
                                                <th>Cotas</th>
                                                <th>Preço</th>
                                                <th>Tipo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                onRequest ? (
                                                    <tr>
                                                        <td colspan="5">
                                                        <Load></Load>
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    <tr>
                                                        <td>{formatString(lastMoviment.date, 'date')}</td>
                                                        <td>{lastMoviment.ticker}</td>
                                                        <td>{lastMoviment.quotas}</td>
                                                        <td>{formatString(lastMoviment.price, 'price')}</td>
                                                        <td>{formatString(lastMoviment.order_type, 'order_type')}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </ Card>

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
                                            <Form onSubmit={ handleSubmit } className="form">
                                                <Select label="Ticker" name="ticker" placeholder="Código da ação" options={optionTickers}/>
                                                <Select label="Tipo de Ordem" name="type" placeholder="Tipo de ordem" options={optionTypeOrder} />
                                                <Input label="Cotas"type="number" name="quotas" placeholder="Informe a quantidade de cotas" />
                                                <Input label="Preço" type="text" name="price" placeholder="Informe o preço " />
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
                            </div>
                        </div>

                <Footer />

        </Container>
    )
}
