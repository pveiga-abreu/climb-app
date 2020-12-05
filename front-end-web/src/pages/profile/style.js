import styled from 'styled-components';

export const Container = styled.div`
.profile {
    display: grid;
    grid-template-columns: 0.8fr 2.2fr;
    min-height: 450px;

    .card{
        .cardContainer{
            .card{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 80%;
                cursor: pointer;
                


                div{
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
        }

    }

        .card-form {
            display: flex;
            flex-direction: column;
            align-items: center;

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 70%;

                .form {
                    display: flex;
                    flex-direction: column;
                    width: 100%;

                    .containerInput {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        margin-top: 5px;
                        margin-bottom: 30px;

                        label {
                            font-size: 12px;
                            font-weight: 700;
                            color: #112257;
                        }

                        input {
                            width: 100%;
                            border: none;
                            border-bottom: 1px solid #112257;
                            box-shadow: none;
                            background-color: transparent;
                            border-radius: 0;
                        }
                    }

                }
            }
        }
    }
`
