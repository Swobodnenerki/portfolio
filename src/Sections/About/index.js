import React from 'react';
import Timeline from '../../Components/Timeline';
import HomeStyle from '../../Styling/HomeStyle.css';
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
