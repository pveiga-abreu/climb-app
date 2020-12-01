import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.table`
  border-collapse: collapse;
  width: 100%;

  thead th {
    color: #000;
    padding: 0.75rem 0.5rem;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    border-bottom: 1px solid #e9ecef;

  }

  tbody {
    td {
      font-size: 13px;
      font-weight: 100;
      padding: 0.75rem 0.5rem;
      color: #848484;
      text-align: center;
      border-top: 1px solid #e9ecef;
      max-width: 27vmax;

      .icon {
        margin-right: 10px;
      }
    }

    tr {
      :hover {
        background: #f1f1f1;
      }
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      margin: 0px 5px;
    }
  }

`
