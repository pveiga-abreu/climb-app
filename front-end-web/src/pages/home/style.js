import styled from 'styled-components';

export const Container = styled.div`
.home {
    display: grid;
    grid-template-areas: 
    'i1 i1 i1 i1 i1'
    'i1 i1 i1 i1 i1'
    'i1 i1 i1 i1 i1'
    'i2 i2 i2 i2 i2'
    'i2 i2 i2 i2 i2';
    min-height: 450px;
}

.i1 {
    grid-area: i1;
}
.i2 {
    grid-area: i2;
}
`
