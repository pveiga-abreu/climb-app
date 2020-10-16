import styled from 'styled-components';

export const Container = styled.div`
.wallet {
    display: grid;
    grid-template-areas: 
    'i1 i1 i2 i2 i2'
    'i1 i1 i2 i2 i2'
    'i1 i1 i2 i2 i2'
    'i1 i1 i3 i3 i3'
    'i1 i1 i3 i3 i3';
    min-height: 450px;
}

.i1 {
    grid-area: i1;
}
.i2 {
    grid-area: i2;
}
.i3 {
    grid-area: i3;
}
`
