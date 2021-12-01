import React from "react";
import { MenuLink, Menu, MenuItem, FooterContainer, IconLink, Info } from "./FooterElements";
import { FaGithub, FaPaperclip, FaLinkedin } from "react-icons/fa";
class Footer extends React.Component {
  render() {
    const goToGithub = () => {
      window.location.href = "https://github.com/Swobodnenerki?tab=repositories";
    }
    const goToCV = () => {
      window.location.href = "https://drive.google.com/file/d/1bpY8ZkZIPaX3IAxaj4KyXZl3Rxj8JvDS/view?usp=sharing";
    }
    return (
            <FooterContainer>
                <Menu>
                    <MenuItem><MenuLink to='home' smooth={true} duration={500} spy={true} exact='true' offset={-90}>Home</MenuLink></MenuItem>
                    <MenuItem><MenuLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-90}>About</MenuLink></MenuItem>
                    <MenuItem><MenuLink to='projects'smooth={true} duration={500} spy={true} exact='true' offset={-90}>Projects</MenuLink></MenuItem>
                    <MenuItem><MenuLink to='skills'smooth={true} duration={500} spy={true} exact='true' offset={-90}>Skills</MenuLink></MenuItem>
                    <MenuItem><MenuLink to='contact'smooth={true} duration={500} spy={true} exact='true' offset={-90}>Contact</MenuLink></MenuItem>
                </Menu>
                <Menu>
                    <MenuItem><IconLink><FaLinkedin/></IconLink></MenuItem>
                    <MenuItem onClick={goToGithub}><IconLink><FaGithub/></IconLink></MenuItem>
                    <MenuItem onClick={goToCV}><IconLink><FaPaperclip/></IconLink></MenuItem>
                </Menu>
                <Info>&copy; 2021 Filip Kozak</Info>
            </FooterContainer>
    );
  }
}
export default Footer;