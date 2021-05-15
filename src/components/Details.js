import React from 'react'
import styled from 'styled-components'

function Details() {
    return (
        <Container>
            <Wrap>
                <Content>
                    <Heading>
                        <h2>Avengers: Endgame</h2>
                    </Heading>
                    <Metadata>
                        <span>2 hr 54 min</span>
                        <span>2019</span>
                        <span>Superhero</span>
                        <span>12+</span>
                        <span>Hindi</span>
                    </Metadata>
                    <Description>
                        <p>
                            After the devastating events of the Infinity War, the Avengers assemble once more to reverse Thanos’ actions and restore balance to the universe.
                        </p>
                    </Description>
                    <Controls>
                        <PlayButton>
                            <img src="./images/play-icon-white.png" />
                            <span> PLAY </span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="./images/play-icon-white.png" />
                            <span> TRAILER </span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                    </Controls>
                </Content>
            </Wrap>
        </Container>
    )
}

export default Details

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 10px;
    background-image: url("./images/1003220.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;

`
const Wrap = styled.div`
    width: 500px;
    postion: relative;
`

const Heading = styled.div`
    padding: 0 0 0 20px;
`

const Content = styled.div`
    position: absolute;
    top: 25%;
    width: 35%;
`

const Metadata = styled.div`
    padding-left: 20px;

    span {
        font-style: italic;
        color: grey;
        font-weight: bold;

        &:before {
            content: "•";
            padding: 4px;
        }
    }

`

const Description = styled.div`
    padding-left: 20px;
`
const Controls = styled.div`
    display: flex;
`

const PlayButton = styled.button`
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 40px;
    background: rgb(249, 249, 249);
    padding: 15px;
    margin: 0px 15px 0px 25px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid white;

    span {
        color: white;
        letter-spacing: 2px;
    }
`

const TrailerButton = styled.button`
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 40px;
    background: rgb(249, 249, 249);
    padding: 15px;
    margin: 0px 15px 0px 0px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid white;

    span {
        color: white;
        letter-spacing: 2px;
    }
`
const AddButton = styled.button`
    display: flex;
    border: 1px solid white;
    align-items: center;
    height: 40px;
    background: rgba(249, 249, 249, 0);
    padding: 15px;
    margin: 0px 15px 0px 0px;
    cursor: pointer;
    background-color: transparent;
    border-radius: 50%;
    justtify-content: center:
    border: none;
    outline: none;

    span {
        font-size: 25px;
        color: white;
        letter-spacing: 2px;
    }
`