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
import {AboutContainer, AboutColumnContainer, About1stColumn, About2stColumn, Header, Title, PhotoContainer, Photo, Spacer, TextContainer, IconButton, IconButtonContainer, IconButtonText} from './AboutElements';
import { Chrono } from "react-chrono";
import TimeLine2 from '../../Components/Timeline2/TimeLine';
import myphoto from "../../Photos/filip4.jpg";
import { FaGithub, FaPaperclip, FaLinkedin } from "react-icons/fa";

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
  const goToGithub = () => {
    window.location.href = "https://github.com/Swobodnenerki?tab=repositories";
  }
    return (
        <div>
        <AboutContainer id='about'>
            <Spacer/>
            <Header>ABOUT</Header>
            <AboutColumnContainer>
                <About1stColumn>
                    <Title>LIFE</Title>
                    <PhotoContainer>
                        <Photo src={myphoto}/>
                    </PhotoContainer>
                    <IconButtonContainer>
                        <IconButton onClick={goToGithub}><FaGithub size="42px"/><IconButtonText>Github</IconButtonText></IconButton>
                        <IconButton><FaPaperclip size="42px"/><IconButtonText>CV</IconButtonText></IconButton>
                        <IconButton><FaLinkedin size="42px"/><IconButtonText>Linkedin</IconButtonText></IconButton>
                    </IconButtonContainer>
                    <TextContainer>
                        Hi my name is Filip and welcome to my page. I am a fifth year student at Wroclaw University of Science and Technology and software developer.
                    </TextContainer>
                    <TextContainer>
                        Recently i have been working in Mercedes-Benz dealership as a Product Expert, helping others make their dreams come true. Now is my turn to write my own story. 
                    </TextContainer>
                </About1stColumn>
                <About2stColumn> 
                    <Title>EXPERENCE & EDUCATION</Title>
                    <TimeLine2/>
                    {/* <Timeline/> */}
                    {/* <Chrono items={items} mode="VERTICAL_ALTERNATING" slideShow itemWidth='200' hideControls disableNavOnKey theme='color: white'/> */}
                </About2stColumn>
            </AboutColumnContainer>
        </AboutContainer>
    </div>
    )
}
