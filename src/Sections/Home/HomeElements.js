import styled from 'styled-components';
import Photos from '../../Photos/29913.jpg';
import { About1stColumn } from '../About/AboutElements';
import breakpoint from './breakpoints';

export const HomeBackground = styled.div`
    display: flex;
    background-color: black;
    height: 100vh;
    min-height: 500px;
    background-size: cover;
    font-family: 'Ubuntu';
    color: white;
    background-color: #090B0E;
    /* background: url(${Photos}) no-repeat; */
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
`
export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    height: 100vh;
    position: relative;
    z-index: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-family: 'Ubuntu';
`
export const HeroBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
`
export const HeroContent = styled.div`
    z-index: 3;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const HomeWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;

    
`
export const HomeText1 = styled.div`
    font-size: 1.688rem;
`

export const HomeText2 = styled.div`
    margin-top: 100px;
    font-size: 4.5rem;
    font-weight: 600;
    z-index: 100;
    color: white;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 2rem;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 4.5rem;
    }
    @media only screen and ${breakpoint.device.sm}{
        font-size: 4.5rem;
    }
`
export const HomeText3 = styled.div`
    font-size: 2.5rem;
    margin: 5px 0;
`
export const HomeTextSpan = styled.span`
    font-size: 2.188rem;
    margin: 5px 0;
    color: #0bceaf;
    font-weight: 500;
    text-shadow: 3px 4px 3px #000000;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 1.563rem;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 2.188rem;
    }
`
export const TextHomeContainer = styled(About1stColumn)`
z-index: 2;
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1 1 500px;
`
export const HomePhotoContainer = styled.div`
    z-index: 3;
    display: flex;
    flex:  1 1 500px;
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
    width: 84%;
    
`
