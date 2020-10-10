import React from 'react';
import { Container } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Wallet() {
    return(
        <Container>
            <div>
                <Header />
                Wallet
                <Footer />
            </div>
        </Container>
    )
}
