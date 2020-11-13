import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    label {
        margin-bottom: 5px;
    }
`


export const StyledInput = styled.input`
    border: 1px solid #e9e9e9;
    border-radius: 20px;
    height: 30px;
    box-shadow: 1px 1px 3px #e0e0e0;
    padding: 5px;
    margin: 5px 0 15px 0;
    text-align: center;
`