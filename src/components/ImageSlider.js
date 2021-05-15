import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="./images/slider-badag.jpg" />
            </Wrap>
            <Wrap>
                <img src="./images/slider-scale.jpg" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }


    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    .slick-prev {
        z-index: 1;
    }
`

const Wrap = styled.div`
    img {
        cursor: pointer;
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        transition-duration: 500ms;

        &:hover {
            border: 2px solid rgba(249,249,249, 0.8)
        }
    }
`