import styled from 'styled-components';
import breakpoint from '../Home/breakpoints';

export const AboutContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #090B0E;
    /* height: 100vh; */
    min-height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Ubuntu';
    color: white;
    
    overflow: hidden;
`
export const Header = styled.div`
    margin-top: 10px;
    text-align: center;
    font-size: 2.313rem;
    font-weight: 500;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 1.438rem;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 1.875rem;
    }
    @media only screen and ${breakpoint.device.sm}{
        font-size: 2.313rem;
    }
`

export const Title = styled.div`
    text-align: center;
    font-size: 1.875rem;
    font-weight: 500;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 1.25rem;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 2.188rem;
    }
    @media only screen and ${breakpoint.device.sm}{
        font-size: 1.875rem;
    }
`

export const AboutColumnContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    
`
export const About1stColumn = styled.div`
    flex: 1 1 300px; 
    margin: 50px;
    
    text-align: center;
    
`
export const PhotoContainer = styled.div`
    
    margin-top: 40px;
    
    
`
export const Photo = styled.img`
    width: 35%;
    min-width: 200px;
    border-radius: 50%;
    margin-bottom: 20px;
    
`

export const TextContainer = styled.div`
    margin-top: 40px;
    text-align: justify;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 1.125rem;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 1.25rem;
    }
    @media only screen and ${breakpoint.device.sm}{
        font-size: 1.563rem;
    }
`
export const IconButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    overflow: auto;
`
export const IconButtonText = styled.div`
    color: white;
    font-size: 1.25rem;
    @media only screen and ${breakpoint.device.xs}{
        font-size: 1.125rem;
    }
    @media only screen and ${breakpoint.device.s}{
        font-size: 1.25rem;
    }
`

export const IconButton = styled.div`
    color: white;
    margin: 15px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;
    border: none;
    outline: 0;
    cursor: pointer;
    &:hover{
        transition: color 0.3s ease;
        color: #0bceaf;
    }
    &:hover ${IconButtonText} {
        transition: color 0.3s ease;
        color: #0bceaf;
    }
`



export const About2stColumn = styled.div`
    flex: 1 1 300px; 
    margin: 50px;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
`
export const Spacer = styled.div`
    align-self: center;
    background-color: #0bceaf;
    width: 70%;
    height: 4px;
    border-radius: 5px;
    margin: 40px;
`

export const Divider = styled.h4`
    display: flex;
    align-items: center;
    &::before {
        background-color: #0bceaf;
        border-radius: 5px;
        display: flex;
        content: "";
        flex-grow: 1;
        height: 4px;
        margin: 0 20px;
        margin-left: 12%;
  }
  &::after {
        border-radius: 5px;
        display: flex;
        content: "";
        flex-grow: 1;
        height: 4px;
        background-color: #0bceaf;
        margin: 0 20px;
        margin-right: 12%;
  }
`