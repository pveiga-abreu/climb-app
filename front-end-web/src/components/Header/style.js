import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    display: grid;
    grid-template: 1fr / 1fr 7fr 3fr;
    margin-bottom: 10px;

    .logo {
        display: flex;
        height: 100%;
        width: 100%;
    }

    .logo img{
        margin: auto;
        width: 90%;
        max-height: 90%;
        min-height: 50px;
    }

    .nav {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .icon {
        width: 1.7em;
        :hover {
            fill-opacity: 0.7;
            transform: scale(1.2);
        }
    }
`
