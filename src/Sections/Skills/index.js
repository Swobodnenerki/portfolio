import React from "react";
import { AboutContainer, Spacer, Header, AboutColumnContainer, About1stColumn, About2stColumn, Title, Divider  } from "../About/AboutElements";
import './SkillsStyle.css'
import {CircleContainer, EachProffesionalSkill, EachSkillContainer, Info, Name, Percentage, PercentageText, Principal, ProffesionalContainer, ProffesionalSkillText, ProgressBar, TitleMargin, TitleSkills} from './SkilsElements'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import softSkillsData from './softSkillsData';
import skillsData from './skillsData'
class Skills extends React.Component {
  render() {
    return (
      <AboutContainer id='skills'>
      <Divider>
          <Header>SKILLS</Header>
          </Divider>
      <AboutColumnContainer>
              <About1stColumn >
                  <Title>TECHNICAL</Title>
                  <TitleMargin/>
                  {softSkillsData.map((data, idx) => (
                      <EachSkillContainer data={data} key={idx}>
                          <Principal>
                                <Info>
                                  <Name>{data.skill}</Name>
                                  <PercentageText>{data.rating}%</PercentageText>
                                </Info>
                                <ProgressBar>
                                    <Percentage style={{width: data.rating + "%"}}></Percentage>
                                </ProgressBar>
                            </Principal>
                      </EachSkillContainer>
                      ))}
              </About1stColumn>
              <About2stColumn>
                  <Title>PROFESSIONAL</Title>
                  <ProffesionalContainer>
                      {skillsData.map((data, idx) => (
                      <EachProffesionalSkill data={data} key={idx}>
                          <CircleContainer>
                              <CircularProgressbar  value={data.rating} text={`${data.rating}%`} styles={buildStyles({strokeLinecap: "butt", textColor: "white", pathColor: "#0bceaf", trailColor: "rgba(0,0,0,0.5)"})} />
                          </CircleContainer>
                          <ProffesionalSkillText>{data.skill}</ProffesionalSkillText>
                      </EachProffesionalSkill>
                      ))}
                  </ProffesionalContainer>
              </About2stColumn>
              <About1stColumn >
                  <Title >LANGUAGE</Title>
                  <ProffesionalContainer>
                      <EachProffesionalSkill>
                          <CircleContainer>
                              <CircularProgressbar value={85} text={`C1`} background backgroundPadding={4} styles={buildStyles({ backgroundColor: "#012169", strokeLinecap: "butt", textColor: "white", pathColor: "#c8102e", trailColor: "#ffffff"})} />
                          </CircleContainer>
                          <ProffesionalSkillText>English</ProffesionalSkillText>
                      </EachProffesionalSkill>

                      <EachProffesionalSkill>
                          <CircleContainer>
                              <CircularProgressbar value={50} text={`B1`} background backgroundPadding={4}  styles={buildStyles({backgroundColor: "#0039a6", strokeLinecap: "butt", textColor: "white", pathColor: "#d52b1e", trailColor: "#ffffff"})}/>  
                          </CircleContainer>
                          <ProffesionalSkillText>Russian</ProffesionalSkillText>
                      </EachProffesionalSkill>

                      <EachProffesionalSkill>
                          <CircleContainer>
                              <CircularProgressbar value={25} text={`A2`} background backgroundPadding={4}  styles={buildStyles({backgroundColor: "#000000", strokeLinecap: "butt", textColor: "#ffffff", pathColor: "#FFCE00", trailColor: "#DD0000"})}/>
                          </CircleContainer>
                          <ProffesionalSkillText>German</ProffesionalSkillText>
                      </EachProffesionalSkill>
                  </ProffesionalContainer>
              </About1stColumn>
          </AboutColumnContainer>
    </AboutContainer>
    );
  }
}
export default Skills;