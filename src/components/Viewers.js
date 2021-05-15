import React from 'react';
import styled from "styled-components";

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="./images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="./images/viewers-pixar.png" />
            </Wrap>
            <Wrap>
                <img src="./images/viewers-marvel.png" />
            </Wrap>
            <Wrap>
                <img src="./images/viewers-starwars.png" />
            </Wrap>
            <Wrap>
                <img src="./images/viewers-national.png" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin: 30px 0px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
    `
const Wrap = styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.9)
    }
`