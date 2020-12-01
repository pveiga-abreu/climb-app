import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: #112257;
    margin-top: 20px;
    width: 100%;
    min-height: 100px;

    img {
        width: 100%;
    }

    .cardContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
        height: 100%;

        div {
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            width:50%;
            color: #fafafa;
        }

        #logos{
            svg{
                margin-left: 25px;
            }

            path{
                color: #FFF;
            }
        }

    }

`
