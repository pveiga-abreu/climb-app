import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Axios from 'axios'

import { Form } from '@unform/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { PieChart, Pie, Cell } from 'recharts'

import { api } from '../../services'


import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Label from '../../components/Label';
import CardContainer from '../../components/CardContainer'
import Table from '../../components/Table'
import { Container } from './style.js';
import {Load} from '../../components/Load';


export default function Wallet({ history }) {
    const user = useSelector((state) => state)
    const [hideValue, setHideValue] = useState(false);
    const [wallets, setWallets] = useState([])    
    const [tickers, setTickers] = useState([])    
    const [walletSelected, setWalletSelected] = useState([])    
    const [valueWallet, setValueWallet] = useState(null)
    const [dataGrafic, setDataGrafic] = useState([])

    useEffect(() => {
        if(user.token === undefined){
            history.push('/login')
        }
        

        Promise.all([loadData()])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const loadData = () => {
        return new Promise (async (resolve, reject) => {
            try{

                let selected = 0;
                const requestWallets = await api.get(`/user/wallets/${user.id}`)
                if(requestWallets.status === 200){
                    const { data } = requestWallets
                    selected = data[0].wallet_id
                    setWalletSelected(data[0].wallet_id)
                    setWallets(data)
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
                            value: row.percent 
                        }
                    })


                    setDataGrafic(grafic)
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
    

    function handleSubmit(data) {
        console.log(data);
    }

    const validatePercent = (value) => {
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

                const requestTickers = await api.get(`/wallet/${id}`)
                if(requestTickers.status === 200 && requestTickers.data.assets !== null){
                    setTickers(requestTickers.data.assets)
                }

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
                                            <span className={validatePercent(row.result_percent)}>{row.result_percent.toFixed(2) +'%'}</span>
                                            <strong>R$ {row.actual_price}</strong>
                                            <p>{row.quotas} cotas</p>
                                            <span id="location-chart" style={{background: COLORS[index]}}></span>
                                        </Card>
                                        ))
                                    ) : (
                                        <>
                                        <Load></Load>
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
                                                    {valueWallet === null ? <Load></Load> : `R$ ${valueWallet}`}
                                                </strong>
                                            )}
                                    </div>
                                </Card>
                                <Card>
                                    <div>
                                    <h4>Divisão Carteira</h4>
                                        <PieChart width={200} height={200}>
                                            <Pie
                                                data={dataGrafic}
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
                                                    dataGrafic.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                                }
                                            </Pie>
                                        </PieChart>
                                    </div>
                                    <div>
                                    <h4>Ações %</h4>
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
                                                <th>Cotas</th>
                                                <th>Preço</th>
                                                <th>Tipo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>09/11/2020</td>
                                                <td>3</td>
                                                <td>R$ 7.653,21</td>
                                                <td>Fundo Imobiliário</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </ Card>
                                <Card >
                                    <Label >Última Movimentação</Label>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Data</th>
                                                <th>Cotas</th>
                                                <th>Preço</th>
                                                <th>Tipo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>09/11/2020</td>
                                                <td>3</td>
                                                <td>R$ 7.653,21</td>
                                                <td>Fundo Imobiliário</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </ Card>
                                <Card >
                                    <Label >Última Movimentação</Label>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Data</th>
                                                <th>Cotas</th>
                                                <th>Preço</th>
                                                <th>Tipo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>09/11/2020</td>
                                                <td>3</td>
                                                <td>R$ 7.653,21</td>
                                                <td>Fundo Imobiliário</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </ Card>

                            </div>
                        </div>

                <Footer />

        </Container>
    )
}
