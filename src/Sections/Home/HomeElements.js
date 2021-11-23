import styled from 'styled-components';
import Photos from '../../Photos/29913.jpg';
import Photos2 from '../../Photos/29914.jpg';
import { About1stColumn, About2stColumn } from '../About/AboutElements';
import breakpoint from './breakpoints';
import SVG from '../../Photos/bg-11.svg';

export const HomeBackground = styled.div`
    display: flex;
    background-color: black;
    height: 100vh;
    min-height: 500px;
    background-size: cover;
    /* background-attachment: fixed; */
    font-family: 'Ubuntu';
    color: white;
    background: url(${Photos}) no-repeat;
    justify-content: center;
    //Dawid
    background-position: center;
    background-repeat: no-repeat;
    //koniec
`

export const HomeWrapper = styled.div`
    /* margin: 445px 0 75px 100px; */
    //Dawid
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    //Koniec
    
`
export const HomeText1 = styled.div`
    font-size: 27px;
`

export const HomeText2 = styled.div`
    margin-top: 100px;
    font-size: 72px;
    font-weight: 600;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 32px;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 72px;
    }
    @media only screen and ${breakpoint.device.sm}{
        font-size: 72px;
    }
`
export const HomeText3 = styled.div`
    font-size: 40px;
    margin: 5px 0;
`
export const HomeTextSpan = styled.span`
    font-size: 35px;
    margin: 5px 0;
    color: #3D23DD;
    font-weight: 500;
    text-shadow: 3px 4px 3px #000000;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 25px;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 35px;
    }
`
export const TextHomeContainer = styled(About1stColumn)`
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 0.5 0.5 500px;
`
export const HomePhotoContainer = styled.div`
    display: flex;
    flex:  1 1 950px;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    margin-bottom: 0;
    @media only screen and ${breakpoint.device.xs}{
        display: none;
    }
    @media only screen and ${breakpoint.device.sm}{
        display: flex;
    }
`
export const Image = styled.img`
    width: 80%;
    
`
