import React from 'react';
import { Container } from './style.js';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import logo from '../../images/logo.svg';

export default function Home() {
    function handleButton() {
        console.log("Clique")
    }

    return(
        <Container>
            <div className="homepage">
                <img src={ logo } className="image"/>
                <Button onClick={() => handleButton()}>
                    Climb
                </Button>
                <Footer />
            </div>
        </Container>
    )
}
