import styled from 'styled-components'

export const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative; //to psuje ze nachodzi na pasek
    &::after{
        background-color: #370B64;
        content: '';
        position: absolute;
        left: calc(50% - 2px);
        width: 4px;
        height: 100%;
        
    }
    
`