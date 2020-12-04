import styled from 'styled-components';

export const Container = styled.div`

    .home {
        display: flex;
        flex-direction: column;
        height: 80vh;

        .card-row {
            display: flex;
            height: 200px;
        }

        .cardContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            padding: 0 250px;
            height: 100%;

            .card {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                width: 150px;
                height: 180px;
                box-shadow: 1px 1px 4px 2px #c0c0c0;

                h5 {
                    font-size: 18px;
                    font-weight: 900;
                    color: #112257;
                }
                .positive-balance {
                    width: fit-content;
                    height: fit-content;
                    line-height: 15px;
                    font-size: 10px;
                    background-color: #2ecc71;
                    color: #FFF;
                }
                .negative-balance {
                    width: fit-content;
                    height: fit-content;
                    line-height: 15px;
                    font-size: 10px;
                    background-color: #8b0000;
                    color: #FFF;  
                }

                strong {
                    color: #424959;
                    font-weight: 500;
                }

                p {
                    color: #424959;

                    :last-child {
                        font-size: 10px;
                    }
                }
            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
                width: 80%;
                height: 40px;
                background-color: #F5F5F5;
                box-shadow: 1px 1px 3px 1px #e0e0e0;
                cursor: pointer;

                div {
                    display: flex;
                    padding-left: 30px;
                    justify-content: flex-start;
                    align-items: center;
                    width: 80%;
                }

                .up-filter {
                    margin-right: 5px;
                    path {
                        color: #2ecc71;
                    }
                }
                .down-filter {
                    margin-right: 5px;
                    path {
                        color: #8b0000;
                    }
                }
            }
        }
        

    }
    


    
`
