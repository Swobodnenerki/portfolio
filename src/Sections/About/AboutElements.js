import styled from 'styled-components'
import myphoto from "../../Photos/29913.jpg";

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
    font-size: 37px;
    font-weight: 500;
`

export const Title = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: 500;
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
    border-radius: 50%;
    margin-bottom: 20px;
    
`

export const TextContainer = styled.div`
    margin-top: 40px;
    font-size: 25px;
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
    font-size: 20px;
`
export const Dupa = styled.div`
    &:hover{
        transition: color 0.3s ease;
        color: #de354c;
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
        color: #de354c;
    }
    &:hover ${IconButtonText} {
        transition: color 0.3s ease;
        color: #de354c;
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
    background-color: #EF3B3B;
    width: 70%;
    height: 4px;
    border-radius: 5px;
    margin: 40px;
`