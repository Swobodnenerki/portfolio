import React from 'react';
import {AboutContainer, AboutColumnContainer, About1stColumn, About2stColumn, Header, Title, PhotoContainer, Photo, TextContainer, IconButton, IconButtonContainer, IconButtonText, Divider} from './AboutElements';
import TimeLine from '../../Components/Timeline/TimeLine';
import myphoto from "../../Photos/filip11.png"; //filip4.jpg
import { FaGithub, FaPaperclip, FaLinkedin } from "react-icons/fa";

export const About = () => {

  const goToGithub = () => {
    window.location.href = "https://github.com/Swobodnenerki?tab=repositories";
  }
  const goToCV = () => {
    window.location.href = "https://drive.google.com/file/d/1bpY8ZkZIPaX3IAxaj4KyXZl3Rxj8JvDS/view?usp=sharing";
  }
    return (
        <div>
        <AboutContainer id='about'>
            <Divider>
            <Header>ABOUT</Header>
            </Divider>
            <AboutColumnContainer>
                <About1stColumn>
                    <Title>LIFE</Title>
                    <PhotoContainer>
                        <Photo src={myphoto}/>
                    </PhotoContainer>
                    <IconButtonContainer>
                        <IconButton onClick={goToGithub}><FaGithub size="42px"/><IconButtonText>Github</IconButtonText></IconButton>
                        <IconButton onClick={goToCV}><FaPaperclip size="42px"/><IconButtonText>CV</IconButtonText></IconButton>
                        <IconButton><FaLinkedin size="42px"/><IconButtonText>Linkedin</IconButtonText></IconButton>
                    </IconButtonContainer>
                    <TextContainer>
                        Hi my name is Filip and welcome to my page. I am a fifth year student at Wroclaw University of Science and Technology and software developer.
                    </TextContainer>
                    <TextContainer>
                        Recently I have been working in Mercedes-Benz dealership as a Product Expert, helping others make their dreams come true. Now is my turn to write my own story. 
                    </TextContainer>
                </About1stColumn>
                <About2stColumn> 
                    <Title>EXPERENCE & EDUCATION</Title>
                    <TimeLine/>
                </About2stColumn>
            </AboutColumnContainer>
        </AboutContainer>
    </div>
    )
}
