import styled from 'styled-components'

export const TimelineItemContent = styled.div`
    background-color: blueviolet;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    /* text-align: center; */
    width: 500px;
    text-align: right;
    align-items: flex-end;
    padding: 15px;
    @media screen and (max-width: 600px) {
        width: 400px;
    }
`

export const TimelineItemContainer = styled.div`
display: flex;
justify-content: flex-end;
padding-right: 30px;
margin: 10px 0;
width: 43%;
&:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0px;
    padding-left: 30px;
    
}
&:nth-child(odd) ${TimelineItemContent} {
    align-items: flex-start;
    text-align: left;
}
`



export const TimeLineItemTag = styled.span`

`

export const TimelineItemDate = styled.time`

`

export const TimelineItemText = styled.p`

`

export const TimelineItemLink = styled.a`

`

export const TimelineItemCircle = styled.span`

`