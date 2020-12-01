import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { Container } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card'
import CardContainer from '../../components/CardContainer'


import {datavantage} from '../../services/data'


export default function Home() {
    const [upactives, setUpactives] = useState(['PETR4.SA', 'ITUB','VALE', 'OIBR3.SA', 'BBDC'])
    const [downactives, setDownactives] = useState(['BEEF3.SA', 'VVAR','MRFG3.SA', 'AZUL4.SA', 'BRKM3.SA'])
    const [data, setData] = useState(datavantage())    
    const [filter, setFilter] = useState('topup')

    const dataGrafic = [
        {
          name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
      ];

    useEffect(() => {
        // Promise.all([loadData()])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // const loadData = () => {
    //     return new Promise (async (resolve, reject) => {
    //         try{
    //             const listData = []
    //             for(const item of upactives){
    //                 const request = await Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${item}&apikey=CWFNSP3LPXSWNWR8`)
    //                 listData.push(request)
    //                 console.log(request)
    //             }
    //             setData(listData)
    //             resolve()
    //         }catch(err){
    //             reject(err)
    //         }
    //     })
    // }


    return(
        <Container>
            <div>
                <Header />
                    <div className="home">
                        <Card className="card-row" >
                        <AreaChart
                            width={1300}
                            height={200}
                            data={dataGrafic}
                            margin={{
                            top: 10, right: 30, left: 0, bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                        </ Card>
                        <Card className="card-row">
                         <CardContainer >
                                <span onClick={() => setFilter('topup')}>
                                    <div>
                                    <strong>Top Up</strong>
                                    </div>
                                    <FontAwesomeIcon className="up-filter" icon={faCaretUp} size="2x"/>
                                </span>
                                <span onClick={() => setFilter('topdown')}>
                                    <div>
                                        <strong>Top Down</strong>
                                    </div>
                                    <FontAwesomeIcon className="down-filter" icon={faCaretDown} size="2x"/>
                                </span>
                         </CardContainer>

                         <CardContainer >
                             {
                                 data.length > 0 ? (
                                    data.map(row => (
                                        row.title === filter && (
                                            row.data.map(card => (
                                                <Card>
                                                    <h5>{card["Meta Data"]["2. Symbol"]}</h5>
                                                    <span className="positive-balance">+2,55%</span>
                                                    <strong>R$ {card["Time Series (Daily)"]["2020-11-27"]["4. close"]}</strong>
                                                    <p>{card["Time Series (Daily)"]["2020-11-27"]["5. volume"]} vol</p>
                                                    <p>27/11/2020</p>
                                                </Card>
                                            ))
                                        )
                                    ))
                                 ) : (
                                     <>
                                     </>
                                 )
                             }
                         </CardContainer>
                        </ Card>
                    </div>
                <Footer />
            </div>
        </Container>
    )
}
