import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './style.css'
import { Title } from '../About/AboutElements';
import breakpoint from '../Home/breakpoints';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export const ProjectsContainer = styled.section`
    flex-direction: column;
    display: flex;
    background-color: black;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Ubuntu';
    color: white;
    min-height: 100vh;
    overflow: hidden;
`
export const CustomSwiper = styled(Swiper)`
    margin-top: 50px !important; 
    width: 90% !important;
    cursor: grab !important;
`
export const CustomSwiperSlide = styled(SwiperSlide)`
    background-color: #090B0E !important; 
    display: flex !important;
    flex-wrap: wrap !important;
`
export const LeftContainer = styled.div`
    flex: 3 3 800px; 
    margin: 30px;
    margin-left: 60px;
    align-items: center;
    justify-content: center;
    display: flex;
`
export const Image = styled.img`
     width: 100%;
     height: unset;
     align-self: center;
`
export const RightContainer = styled.div`
    flex: 1 3 400px;
    background-color: #0D1118;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    margin: 30px;
    margin-right: 60px;
`
export const ContentContainer = styled.div`
    overflow: auto;
    height: 50vh;
`
export const TextContainer = styled.div`
    margin-left: 30px;
    margin-top: 20px;
    margin-right: 30px; 
    @media only screen and ${breakpoint.device.xs}{
        font-size: 1.125rem;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 1.563rem;
    }
`
export const Difficulty = styled(TextContainer)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Description = styled(TextContainer)`
    text-align: justify;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 1.063rem;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 1.25rem;
    }
`
export const List = styled.ul`
    margin-left: 10px;
    margin-right: 30px;
`
export const ListItem = styled.li`
    margin-bottom: 10px;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 1.063rem;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 1.125rem;
    }
`
export const CustomButton = styled(Button)`
    background-color: #fff !important; 
    padding: 10px 0 !important;
    font-size: 1rem !important;
    margin-top: 20px !important;
    color: black !important; 
    font-family: 'Ubuntu' !important; 
    margin-left: 30px !important; 
    margin-right: 30px !important;
`
export const CustomRating = styled(Rating)`
    color: white !important;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 1.25rem !important;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 1.688rem !important;
    }
`
export const CustomStarIcon = styled(StarIcon)`
    opacity: 0.55 !important; 
    color: white !important;
`
export const ProjectTitle = styled(Title)`
    margin-bottom: 30px;
`


