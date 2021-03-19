import React from 'react';
import {TimelineItemContainer, TimelineItemContent, TimeLineItemTag, TimelineItemDate, TimelineItemText, TimelineItemLink, TimelineItemCircle} from './TimelineItemElements';

export const TimelineItem = ({data}) => {
    return (
        <TimelineItemContainer>
            <TimelineItemContent>
                <TimeLineItemTag style={{background: data.category.color}}>
                    {data.category.tag}
                </TimeLineItemTag>
                <TimelineItemDate>
                    {data.date}
                </TimelineItemDate>
                <TimelineItemText>
                    {data.text}
                </TimelineItemText>
                {data.link && (
                    <TimelineItemLink href={data.link.url} target='_blank' rel='noopener noreferrer'>
                        {data.link.text}
                    </TimelineItemLink>
                )}
                <TimelineItemCircle></TimelineItemCircle>
            </TimelineItemContent>
        </TimelineItemContainer>
    )
}
