import React from 'react';
import Timeline from '../../Components/Timeline';
// import Timeline from '@material-ui/lab/Timeline';
import Grid from '@material-ui/core/Grid';
import HomeStyle from '../../Styling/HomeStyle.css';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Button from '@material-ui/core/Button';
import {AboutContainer, AboutColumnContainer, About1stColumn, About2stColumn} from './AboutElements';

export const About = () => {
    return (
        <div>
        <AboutContainer id='about'>
            <AboutColumnContainer>
                <About1stColumn>
                    1
                </About1stColumn>
                <About2stColumn>
                    <Timeline/>
                </About2stColumn>
            </AboutColumnContainer>
        </AboutContainer>
    </div>
    )
}
