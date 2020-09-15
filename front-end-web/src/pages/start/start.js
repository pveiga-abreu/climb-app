import React from 'react';
import { Container } from './style.js';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import logo from '../../assets/logo.svg';

export default function Home() {
    function handleButton() {
        console.log("Clique")
    }

    return(
        <Container>
            <div className="homepage">
                <img src={ logo } className="image"/>
                <a href="/home"><Button onClick={() => handleButton()}>
                    Climb
                </Button></a>
                <Footer />
            </div>
        </Container>
    )
}
