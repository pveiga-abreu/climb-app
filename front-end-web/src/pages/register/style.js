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

        .form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin: 5px;
        }
    }


`
