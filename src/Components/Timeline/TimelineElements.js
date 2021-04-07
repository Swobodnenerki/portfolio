import styled from 'styled-components'

export const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: green; */
    /* margin: 40px 0; */
    position: relative;
    &:after {
        background-color: red;
        content: '';
        position: absolute;
        left: calc(50% - 2px);
        width: 4px;
        height: 100%;
    }
    
    
`