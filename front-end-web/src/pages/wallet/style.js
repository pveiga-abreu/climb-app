import styled from 'styled-components';

export const Container = styled.div`

    #container-wallet{
        width: 100%;
        height: fit-content;
        flex-direction: row;

        .card{
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

        .card-selected {
            background-color: #112257;
            strong , path {
                color: #FFF;
            }
        }

        .card:hover{
            transition: 0.3s;
            transform: scale(1.04);
        }
    }


    .wallet {
        display: flex;
        flex-direction: column;
        width: 100%;


        #div-top {
            height: fit-content;
            width: 100%;
            margin: 40px 0;
            display: flex;
            align-items: center;
            justify-content: center;


            div {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                width: 90vw;
                padding: 0 20px;
                overflow: scroll;
                box-sizing: border-box;


                .card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-around;
                    width: 150px ;
                    min-width: 150px ;
                    height: 180px;
                    box-shadow: 1px 1px 4px 2px #c0c0c0;

                    h5 {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        font-size: 18px;
                        font-weight: 900;
                        color: #112257;
                    }

                    .positive-balance {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: fit-content;
                        min-width: 40px;
                        height: fit-content;
                        line-height: 15px;
                        font-size: 10px;
                        background-color: #2ecc71;
                        color: #FFF;
                        border-radius: 4px;
                    }
                    .negative-balance {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: fit-content;
                        min-width: 40px;
                        height: fit-content;
                        line-height: 15px;
                        font-size: 10px;
                        background-color: #8b0000;
                        color: #FFF;  
                        border-radius: 4px;
                    }

                    strong {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        color: #424959;
                        font-weight: 500;
                    }

                    p {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        color: #424959;

                        :last-child {
                            font-size: 10px;
                        }
                    }

                    #location-chart {
                        width: 100px;
                        height: 3px;
                    }
                }
            }
        }
        
        #div-middle{
            display: flex;
            width: 100%;
            height: 235px;
            flex-direction: row;
            align-items: center;
            justify-content: center;


            .mini-card{
                display: flex;
                flex-direction: column;
                width: 40%;   
                height: 100%;
                background-color: #112257;


                div{
                    width: 100%;       
                    height: 100%;
                    display: flex;
                    padding: 10px;
                    justify-content: center;
                    align-items: center;

                    :first-child{
                        align-items: flex-start;
                        justify-content: space-between;
                        height: 20%;
                    }

                    label {
                        color: #fff;
                    }

                    strong {
                        color: #fff;
                        font-size: 30px;
                    }

                    path {
                        color: #fff;
                    }
                }   
            }
            .card {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 50%;
                    height: 100%;


                }
            }
        }


        #div-down {
            display: flex;
            flex-direction: column;
            width: 1360px;
            justify-content: center;
            align-items: center;


            .card {
                display: table;
                flex-direction: column;
                width: 99%;

                label {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            #plus{
                display: flex;
                justify-content: center;
                align-items: center;
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

        }
        
    } 
`
