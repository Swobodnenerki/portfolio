import React from 'react';
import {TimelineItemContainer, TimelineItemContent, TimeLineItemTag, TimelineItemDate, TimelineItemText, TimelineItemLink, TimelineItemCircle} from './TimelineItemElements';
export const TimelineItem = ({data}) => {
    return (
        <TimelineItemContainer className='timeline-item'>
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
        // <div className='timeline-item'>
        //     <div className='timeline-item-content'>
        //         <span className='tag' style={{background: data.category.color}}>
        //             {data.category.tag}
        //         </span>
        //         <time>{data.date}</time>
        //         <p>{data.text}</p>
        //         {data.link && (
        //             <a href={data.link.url} target='_blank' rel='noopener noreferrer'>
        //                 {data.link.text}
        //             </a>
        //         )}
        //         <span className='circle'></span>
        //     </div>
        // </div>
    )
}
