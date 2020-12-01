import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faWallet } from '@fortawesome/free-solid-svg-icons'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card'
import CardContainer from '../../components/CardContainer'
import { Container } from './style.js';

export default function Profile() {
    return(
        <Container>
            <div>
                <Header />
                    <div className="profile">
                        <Card>
                            <CardContainer>
                                <Card>
                                    <div>
                                        <FontAwesomeIcon icon={faUserTie} size="2x"/>
                                    </div>
                                    <strong>
                                        Profile
                                    </strong>
                                </Card>
                                <Card>
                                    <div>
                                        <FontAwesomeIcon icon={faWallet} size="2x"/>
                                    </div>
                                    <strong>
                                        Wallet
                                    </strong>
                                </Card>
                                <Card>
                                    <div>
                                        <FontAwesomeIcon icon={faWallet} size="2x"/>
                                    </div>
                                    <strong>
                                        Wallet
                                    </strong>
                                </Card>
                            </CardContainer>
                        </ Card>
                        <Card >
                            Profile 2
                        </ Card>
                    </div>
                <Footer />
            </div>
        </Container>
    )
}
