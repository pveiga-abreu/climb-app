import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: #314ba3;
    border-radius: 22px;
    height: calc(2.5rem + 2px);
    width: 100%;  
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0;
    transition: 0.7s;
    cursor: pointer;

    :hover {
      background: #574209
    }

    :disabled {
    background: #ddd;
    border: #ddd;
    color: #fff;
    cursor: wait;

    :hover {
    background: #ddd;
    color: #fff;
    }
  }

  .load{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

export const StyledContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
