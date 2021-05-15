import React from 'react';
import styled from 'styled-components';

function Movies() {
    return (
        <Container>
            <h4> Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6370/936370-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6370/936370-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6370/936370-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6370/936370-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6370/936370-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6370/936370-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6370/936370-v" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6370/936370-v" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies;

const Container = styled.div`
    margin: 30px 0px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr))

`

const Wrap = styled.div`
    transition-duration: 500ms;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }

    &:hover {
        transform: scale(1.1);
    }
`