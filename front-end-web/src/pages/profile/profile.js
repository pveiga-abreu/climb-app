import React from 'react';
import { Container } from './style.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Profile() {
    return(
        <Container>
            <div>
                <Header />
                Profile
                <Footer />
            </div>
        </Container>
    )
}
