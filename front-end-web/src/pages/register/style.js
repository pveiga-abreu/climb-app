import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div > img {
        margin: 15px;
        width: 35%;
    }

    .register-box {
        display: flex;
        flex-direction: column;
        width: 25%;
        min-width: 250px;
        max-width: 400px;
        min-height: 450px;
        justify-content: space-evenly;
        align-items: center;
        .button {
            width: 130px;
        }
    }
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 5px;
    }
    .form label {
        color: #757575;
        font-size: 13px;
    }
    .form input {
        border: 1px solid #e9e9e9;
        border-radius: 20px;
        width: 100%;
        height: 30px;
        box-shadow: 1px 1px 3px #e0e0e0;
        padding: 5px;
        margin: 5px 0 15px 0;
        text-align: center;
    }
`
