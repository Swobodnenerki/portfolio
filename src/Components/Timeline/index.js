import React from 'react'
import { TimelineItem } from '../TimelineItem/index'
import data from './data'
import { TimelineContainer } from './TimelineElements'
const Timeline = () => {
    return (
        <TimelineContainer>
            {data.map((data, idx) =>(
                <TimelineItem data={data} key={idx}/>
            ))}
        </TimelineContainer>
    )
}

export default Timeline
