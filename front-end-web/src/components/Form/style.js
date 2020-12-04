import styled from 'styled-components'
import { Form } from '@unform/web'

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-self: stretch;

    .react-select__menu {
      font-size: 10px;
    }
    /* Definindo a responsividade do tamanho do Select */
    @media (max-width: 1024px) {
      .react-select__control {
        font-size: 12px;
      }
    }
    /* Definindo a responsividade da fonte do select*/

    @media (min-width: 1024px) {
      .react-select__control {
        font-size: 12px;
      }

    .react-select__menu {
      font-size: 12px;
    }
    }
  .inputs {
    display: flex;
  }
  .input, .select {
    margin: 0px 10px;
  }

`
