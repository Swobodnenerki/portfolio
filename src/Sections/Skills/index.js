import React from "react";
import { AboutContainer, Spacer, Header, AboutColumnContainer, About1stColumn, About2stColumn, Title } from "../About/AboutElements";
import './SkillsStyle.css'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import softSkillsData from './softSkillsData';
import skillsData from './skillsData'
class Skills extends React.Component {
  render() {
    return (
      <AboutContainer id='skills'>
        
        <Spacer/>
        <Header>SKILLS</Header>
        <AboutColumnContainer>
                <About1stColumn >
                    <Title style={{marginBottom: "50px"}}>TECHNICAL</Title>
                    <div class="each-skills">
                    {softSkillsData.map((data, idx) => (
                        <div data={data} key={idx} class="candidatos">
                            <div class="princpal">
                                <div class="info">
                                    <div class="nome">{data.skill}</div>
                                    <div class="percentage-num">{data.rating}%</div>
                                </div>
                                <div class="progressBar">
                                    <div class="percentagem" style={{width: data.rating + "%"}}></div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </About1stColumn>
                <About2stColumn>
                    <Title>PROFESSIONAL</Title>
                    <div className="dupa">
                        {skillsData.map((data, idx) => (
                        <div data={data} key={idx}  className="cipa">
                            <div style={{width: "120px"}}>
                                <CircularProgressbar  value={data.rating} text={`${data.rating}%`} styles={buildStyles({strokeLinecap: "butt", textColor: "white", pathColor: "#0bceaf", trailColor: "rgba(0,0,0,0.5)"})} />
                            </div>
                            <div style={{textAlign: "center"}} class="pr-skill-name">{data.skill}</div>
                        </div>
                        ))}
                    </div>
                </About2stColumn>
                <About1stColumn >
                    <Title >LANGUAGE</Title>
                    <div className="dupa">
                        <div className="cipa">
                            <div style={{width:"120px"}}>
                                <CircularProgressbar value={85} text={`C1`} background backgroundPadding={4} styles={buildStyles({ backgroundColor: "#012169", strokeLinecap: "butt", textColor: "white", pathColor: "#c8102e", trailColor: "#ffffff"})} />
                            </div>
                            <div style={{textAlign: "center"}} class="pr-skill-name">English</div>
                        </div>

                        <div className="cipa">
                            <div style={{width:"120px"}}>
                                <CircularProgressbar value={50} text={`B1`} background backgroundPadding={4}  styles={buildStyles({backgroundColor: "#0039a6", strokeLinecap: "butt", textColor: "white", pathColor: "#d52b1e", trailColor: "#ffffff"})}/>  
                            </div>
                            <div style={{textAlign: "center"}} class="pr-skill-name">Russian</div>
                        </div>

                        <div className="cipa">
                            <div style={{width:"120px"}}>
                                <CircularProgressbar value={25} text={`A2`} background backgroundPadding={4}  styles={buildStyles({backgroundColor: "#000000", strokeLinecap: "butt", textColor: "#ffffff", pathColor: "#FFCE00", trailColor: "#DD0000"})}/>
                            </div>
                            <div style={{textAlign: "center"}} class="pr-skill-name">German</div>
                        </div>

                    </div>
                </About1stColumn>
            </AboutColumnContainer>
      </AboutContainer>
    );
  }
}
export default Skills;