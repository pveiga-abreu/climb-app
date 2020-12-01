import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form } from '@unform/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faPlus, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, } from 'recharts'

import * as Yup from 'yup'; 

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



export default function Wallet() {
    // Modal state
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [hideValue, setHideValue] = useState(false);

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];

    const bardata = [
    {
        name: 'Maio', 2020: 4000, 2019: 2400, amt: 2400,
    },
    {
        name: 'Junho', 2020: -3000, 2019: 1398, amt: 2210,
    },
    {
        name: 'Julho', 2020: -2000, 2019: -9800, amt: 2290,
    },
    {
        name: 'Agosto', 2020: 2780, 2019: 3908, amt: 2000,
    },
    {
        name: 'Setembro', 2020: -1890, 2019: 4800, amt: 2181,
    },
    {
        name: 'Outubro', 2020: 2390, 2019: -3800, amt: 2500,
    },
    {
        name: 'Novembro', 2020: 3490, 2019: 4300, amt: 2100,
    },
    ];



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


    return(
        <Container>
            <div>
                <Header />

                    <CardContainer id="container-wallet" >
                        <Card id="top-wallet" >
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


                    <div className="wallet">
                        
                        <Card id="wallet-left">
                            <CardContainer>
                                <div className="grafics">
                                    <h4>Divisão Carteira</h4>
                                    <PieChart width={200} height={200}>
                                        <Pie
                                            data={data}
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
                                                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                            }
                                        </Pie>
                                    </PieChart>

                                    <h4>Ações %</h4>
                                    <PieChart width={200} height={200}>
                                        <Pie
                                        data={data}
                                        cx={100}
                                        cy={100}
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                        >
                                        {
                                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                        }
                                            </Pie>
                                    </PieChart>
                                </div>
                                <Card>
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
                                                    R$ 937,50
                                                </strong>
                                            )}
                                    </div>
                                </Card>
                            </CardContainer>
                        </ Card>


                        <Card id="wallet-rigth">
                            <CardContainer>
                                <div id="evolution">
                                <Label>Evolução dos Investimentos</Label>
                                    <BarChart
                                        width={900}
                                        height={300}
                                        data={bardata}
                                        margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <ReferenceLine y={0} stroke="#000" />
                                        <Bar dataKey="2019" fill="#8884d8" />
                                        <Bar dataKey="2020" fill="#82ca9d" />
                                    </BarChart>
                                </div>

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
                            </CardContainer>
                            
                        </ Card>
                        
                    </div>
                <Footer />
            </div>
        </Container>
    )
}
