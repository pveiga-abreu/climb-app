import React from 'react';
import { Container } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card'

export default function Profile() {
    return(
        <Container>
            <div>
                <Header />
                    <div className="profile">
                        <Card className="i1">
                            Profile 1
                        </ Card>
                        <Card className="i2">
                            Profile 2
                        </ Card>
                    </div>
                <Footer />
            </div>
        </Container>
    )
}
