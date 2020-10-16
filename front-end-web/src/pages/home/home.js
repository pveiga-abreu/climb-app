import React from 'react';
import { Container } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card'

export default function Home() {
    return(
        <Container>
            <div>
                <Header />
                    <div className="home">
                        <Card className="i1">
                            Home Page 1
                        </ Card>
                        <Card className="i2">
                            Home Page 2
                        </ Card>
                    </div>
                <Footer />
            </div>
        </Container>
    )
}
