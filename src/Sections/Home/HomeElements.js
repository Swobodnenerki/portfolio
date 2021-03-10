import styled from 'styled-components';
import Photos from '../../Photos/29914.jpg' 

export const HomeBackground = styled.section`
    display: flex;
    background-color: #283747;
    height: 100vh;
    min-height: 500px;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Ubuntu';
    color: white;
    background: url(${Photos}) no-repeat;
`

export const HomeWrapper = styled.div`
    margin: auto 0 auto 40px;
`
export const HomeText1 = styled.div`
    font-size: 27px;
`

export const HomeText2 = styled.div`
    font-size: 75px;
    font-weight: 600;
    margin-left: -3px;
`
export const HomeText3 = styled.div`
    font-size: 40px;
    margin: 5px 0;
`
export const HomeTextSpan = styled.span`
    color: #170B64;
    font-weight: 500;
`