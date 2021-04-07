import React from 'react';
import Timeline from '../../Components/Timeline';
//import Timeline from '@material-ui/lab/Timeline';
import Grid from '@material-ui/core/Grid';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Button from '@material-ui/core/Button';
import {AboutContainer, AboutColumnContainer, About1stColumn, About2stColumn} from './AboutElements';
import { Chrono } from "react-chrono";
import TimeLine2 from '../../Components/Timeline2/TimeLine';

export const About = () => {
  const items = [
    {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to.."
    },
    {
    title: "May 1950",
    cardTitle: "f",
    cardSubtitle:"t",
    cardDetailedText: "Mg"
    },
    {
    title: "May 1953",
    cardTitle: "g",
    cardSubtitle:"r",
    cardDetailedText: "Ms"
    },
    {
    title: "May 1942",
    cardTitle: "4",
    cardSubtitle:"7",
    cardDetailedText: "3"
    },
    {
    title: "May 1946",
    cardTitle: "8",
    cardSubtitle:"3",
    cardDetailedText: "2"
    },
    
  ];
    return (
        <div>
        <AboutContainer id='about'>
            <AboutColumnContainer>
                <About1stColumn>
                    1 <br/>
                    1<br/>
                    1<br/>
                    1<br/>
                    1<br/>
                </About1stColumn>
                <About2stColumn>
                    <TimeLine2/>
                    {/* <Timeline/> */}
                    {/* <Chrono items={items} mode="VERTICAL_ALTERNATING" slideShow itemWidth='200' hideControls disableNavOnKey theme='color: white'/> */}
                </About2stColumn>
            </AboutColumnContainer>
        </AboutContainer>
    </div>
    )
}
