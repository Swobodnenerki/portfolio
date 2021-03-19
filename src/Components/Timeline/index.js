import React from 'react'
import { TimelineItem } from '../TimelineItem/index'
import data from './data'
import { TimelineContainer } from './TimelineElements'
import '../../Styling/HomeStyle.css';
const Timeline = () => {
    return (
        // <TimelineContainer>
        //     {data.map((data, idx) =>(
        //         <TimelineItem data={data} key={idx}/>
        //     ))}
        // </TimelineContainer>
        <div className='timeline-container'>
            {data.map((data, idx) => (
                <TimelineItem data={data} key={idx}/>
            ))}
        </div>
    )
}

export default Timeline
