import React from 'react'
import {TimelineItem} from './TimeLineItem'
import './TimeLineStyle.css';
import data from './data'
const Timeline = () => {
    return (
        <div className='timeline-container'>
            {data.map((data, idx) => (
                <TimelineItem data={data} key={idx}/>
            ))}
        </div>
    )
}

export default Timeline