import styled from 'styled-components';

export const Container = styled.div`

    #container-wallet{
        width: 100%;
        height: fit-content;
        flex-direction: row;

        #plus{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 10px;
                width: fit-content;
                border-radius: 50%;
                padding: 10px;
                background-color: #E0E0E0;
                cursor: pointer;
            
                path{
                    color: #112257;
                }

                :hover{
                    transition: 0.3s;
                    transform: scale(1.04);
                }
            }

        #top-wallet{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 200px;
            cursor: pointer;
            
            div {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 4px 0;
                width: fit-content;
                border-radius: 50%;
                padding: 10px;
                background-color: #E0E0E0;
            
                path{
                    color: #112257;
                }
            }

            strong{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                font-size: 20px;
                color: #112257;
            }
        }

        .card:hover{
            transition: 0.3s;
            transform: scale(1.04);
        }
    }


    .wallet {
        display: grid;
        grid-template-columns: 0.8fr 2.2fr;
        min-height: 450px;

        #wallet-left{
            .cardContainer{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .card{
                    width: 80%;       
                    div{
                        display: flex;
                        height: 70%;
                        padding: 10px;
                        justify-content: center;
                        align-items: center;

                        :first-child{
                            align-items: flex-start;
                            justify-content: space-between;
                        }

                        strong {
                            font-size: 22px;
                        }
                    }   
                }
            }
        }

        #wallet-rigth{
            .cardContainer{
                height: 100%;

                #evolution{
                    margin-bottom: 60px;
                }

                .label{
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                }

                .table{
                    width: 100%;
                }
            }
        }
        
    }
`
