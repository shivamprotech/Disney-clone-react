import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <Wrap>
                <Logo>
                    <img src="./images/cta-logo-one.svg" />
                </Logo>
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Disney+ is the streaming home of Marvel, so you can enjoy all of your favourite films here, including Iron Man, Thor, Guardians of the Galaxy, Doctor Strange and The Avengers. Watch them in timeline order or mix it up – all the films are available to stream whenever you want them.
                </Description>
                <Logo>
                    <img src="./images/cta-logo-two.png" />
                </Logo>
            </Wrap>
        </Container>
    )
}

export default Login

const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items :center;

    background-image: url("./images/login-background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Wrap = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 650px;

`
const Logo = styled.div`
    img {
        width: 650px;
    }
`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 10px 0px;
    color: #f9f9f9;
    border-radius: 6px;
    text-align: center;
    font-size: 15px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 5px;

    &:hover {
        background: #0483ee; 
    }

`
const Description = styled.p`
    font-size: 13px;
    letter-spacing: 1.2px;
    line-height: 22px;

`