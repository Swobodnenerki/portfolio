import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './style.css'

export const ProjectsContainer = styled.section`
    /* display: flex;
    flex-direction: column;
    background-color: black;
    height: 100vh;
    min-height: 500px;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Ubuntu';
    color: white; */
    flex-direction: column;
    display: flex;
    background-color: black;
    /* height: 100vh; */
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Ubuntu';
    color: white;
    min-height: 100vh;
    overflow: hidden;
`
export const HorizontalSwiper = styled(Swiper)`
    height: '70vh';
    width: '90%';
    margin-left: '5%';
    margin-right: '5%';
`

export const HorizontalSwiperSlide = styled(SwiperSlide)`
    display: 'flex';
`

export const LeftContainer = styled.div`
    flex-basis: '70%';
    display: 'flex';
    justify-content: 'stretch';
`

export const VerticalSwiper = styled(Swiper)`
    width: '100%';
    background-color: 'maroon';
`

export const Image = styled.img`
    width: '100%';
    height: '100%';
`

export const RightContainer = styled.div`
    flex-basis: '30%';
    background: 'blue';
`
