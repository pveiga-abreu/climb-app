import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .login-box{
        display: flex;
        flex-direction: column;
        width: 25%;
        min-width: 250px;
        max-width: 400px;
        min-height: 450px;
        justify-content: space-evenly;
        align-items: center;

        img {
            width: 50%;
        }
    
            .form {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                margin: 5px;

                .error {
                    color: #e74c3c !important;
                }

                strong {
                    color: #314ba3;
                    font-size: 12px;
                    cursor: pointer;
                }
            }
        }
    }


`
