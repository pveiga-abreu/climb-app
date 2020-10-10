import React from 'react';
import { Container } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Home() {
    return(
        <Container>
            <div>
                <Header />
                Home Page
                <Footer />
            </div>
        </Container>
    )
}
