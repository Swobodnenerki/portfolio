import styled from 'styled-components';
import Photos from '../../Photos/29913.jpg';
import Photos2 from '../../Photos/29913.jpg';
import SVG from '../../Photos/bg-11.svg';

export const HomeBackground = styled.section`
    display: flex;
    background-color: black;
    height: 100vh;
    min-height: 500px;
    background-size: cover;
    /* background-attachment: fixed; */
    font-family: 'Ubuntu';
    color: white;
    background-image: url(${Photos2}) no-repeat;
    justify-content: center;
    //Dawid
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    //koniec
`
export const HomeStars = styled.div`
    background: url(${SVG}) no-repeat;
    background-size: 1800px;
    width: 1500px;
`

export const HomeWrapper = styled.div`
    /* margin: 445px 0 75px 100px; */
    //Dawid
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    //Koniec
    
`
export const HomeText1 = styled.div`
    font-size: 27px;
`

export const HomeText2 = styled.div`
    font-size: 74px;
    font-weight: 600;
    margin-left: -3px;
    
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
`