import styled from 'styled-components';
import {Header} from '../About/AboutElements'
import breakpoint from '../Home/breakpoints';
export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #090B0E;
    /* height: 100vh; */
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Ubuntu';
    color: white;
    
    overflow: hidden;
    
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-left: 20%;
    margin-right: 20%;
    color: "white";
    text-align: center;
    margin-bottom: 50px;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 18px;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 20px;
    }
    @media only screen and ${breakpoint.device.sm}{
        font-size: 25px;
    }
`
export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 20vh;
    color: "white";
    font-size: 25px;
    text-align: center;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 18px;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 20px;
    }
    @media only screen and ${breakpoint.device.sm}{
        font-size: 25px;
    }
`
export const HeaderContact = styled(Header)`
    color: #ffff;
`

export const Divider2 = styled.h4`
    display: flex;
    align-items: center;
    &::before {
        background-color: grey;
        border-radius: 5px;
        display: flex;
        content: "";
        flex-grow: 1;
        height: 2px;
        margin: 0 20px;
        margin-left: 30%;
  }
  &::after {
        border-radius: 5px;
        display: flex;
        content: "";
        flex-grow: 1;
        height: 2px;
        background-color: grey;
        margin: 0 20px;
        margin-right: 30%;
  }
`

