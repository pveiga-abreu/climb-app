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

            .card:hover{
                transition: 0.3s;
                transform: scale(1.04);
            }
        }
    }
`
