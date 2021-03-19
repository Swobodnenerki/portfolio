import styled from 'styled-components'

export const AboutContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #283747;
    height: 100vh;
    min-height: 500px;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Ubuntu';
    color: white;
    
`

export const AboutColumnContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: aqua;
`
export const About1stColumn = styled.div`
    flex: 1 1 300px; 
    margin: 50px;
    background-color: aquamarine;
`
export const About2stColumn = styled.div`
    flex: 1 1 300px; 
    margin: 50px;
    background-color: tan;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-height: 100vh;
`