import React, { useState, useEffect } from 'react';
import Axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import {Load} from '../../components/Load';
import { Container } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card'
import CardContainer from '../../components/CardContainer'


export default function Home() {
    const [data, setData] = useState([])    
    const [dataGrafic, setDataGrafic] = useState([])    
    const actives = ['PETR4.SAO', 'ITUB4.SAO','VALE3.SAO', 'ABEV3.SAO']
    const ibovespa = 'BOVA11.SAO'

    useEffect(() => {
        Promise.all([loadData()])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const validatePercent = (value) => {
        let signal = value.substring(0,1)
        if(signal === '-'){
            return 'negative-balance'
        }
        return 'positive-balance'

    }

    const loadData = () => {
        return new Promise (async (resolve, reject) => {
            try{
                const listData = []
                let listibovespa= []

                for(const item of actives){
                    const request = await Axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${item}&apikey=CWFNSP3LPXSWNWR8`)
  
                    if(!request.data.Note){
                        listData.push( request.data)
                        console.log('request.data', request.data)

                    }else{
                        const newrequest = await Axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${item}&apikey=LCADK2UA365CHILT`)
                        if(!newrequest.data.Note){
                            listData.push( newrequest.data)
                            console.log('request.data', newrequest.data)
                        }
                    }
                }

                const request = await Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ibovespa}&apikey=CWFNSP3LPXSWNWR8`)
                if(!request.data.Note){
                    listibovespa.push(request.data)
                    console.log('request.data', request.data)

                }else{
                    const newrequest = await Axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ibovespa}&apikey=LCADK2UA365CHILT`)
                    if(!newrequest.data.Note){
                        listibovespa.push(newrequest.data)
                        console.log('request.data', newrequest.data)
                    }
                }

                const listDataGrafic = []
                if(listibovespa.length> 0){
                    const keys = Object.keys(listibovespa[0]["Time Series (Daily)"]);
                    for(let i=0; i < keys.length; i++){
                        listDataGrafic.push({
                            name: keys[i], 
                            price: listibovespa[0]["Time Series (Daily)"][keys[i]]["4. close"]
                        })
                    }
                }

                setDataGrafic(listDataGrafic.reverse())
                setData(listData)
                resolve()
            }catch(err){
                reject(err)
            }
        })
    }


    return(
        <Container>
            <div>
                <Header />
                    <div className="home">
                        <Card className="card-row" >
                        <AreaChart
                            width={1300}
                            height={180}
                            data={dataGrafic}
                            margin={{
                            top: 30, right: 30, left: 0, bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="price" stroke="#112257" fill="#e0e0e0" />
                        </AreaChart>
                        </ Card>
                        <CardContainer>
                             {
                                 data.length > 0 ? (
                                    data.map((row,index) => (
                                    <Card key={index}>
                                        <h5>{row["Global Quote"]["01. symbol"]}</h5>
                                        <span className={validatePercent(row["Global Quote"]["10. change percent"])}>{row["Global Quote"]["10. change percent"]}</span>
                                        <strong>R$ {row["Global Quote"]["05. price"]}</strong>
                                        <p>{row["Global Quote"]["06. volume"]} vol</p>
                                        <p>{row["Global Quote"]["07. latest trading day"]}</p>
                                    </Card>
                                    ))
                                 ) : (
                                     <>
                                     <Load></Load>
                                     </>
                                 )
                             }
                         </CardContainer>
                    </div>
                <Footer />
            </div>
        </Container>
    )
}
