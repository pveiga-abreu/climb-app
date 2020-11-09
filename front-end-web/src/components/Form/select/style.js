import ReactSelect from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    justify-content: center;
    label {
        margin-bottom: 5px;
    }
`

export const StyledSelect = styled(ReactSelect)`
.react-select__control {
    font-size: .875rem;
    border-radius: 20px;
    width: 100%;
    height: 30px;
    box-shadow: 1px 1px 3px #e0e0e0;

    .react-select__indicator {
        :hover{
            color: #9d0d62;
        }
    }
}
`
