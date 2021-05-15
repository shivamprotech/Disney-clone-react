import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="./images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="./images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="./images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="./images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="./images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="./images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="./images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="./images/IMG-1323.png" />
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0px 36px;
    overflow: hidden;
`
const Logo = styled.img`
    width: 70px;
`

const NavMenu = styled.div`
    cursor: pointer;
    display: flex;
    flex: 1;
    padding: 0px 15px;

    a {
        display: flex;
        align-items: center;
        padding: 0px 15px;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
        }
    }
`

const UserImg = styled.img`
    cursor: pointer;
    height: 40px;
    width: 40px;
    border-radius: 50%;
`