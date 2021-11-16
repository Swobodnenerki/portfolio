import React from "react";
import { MenuLink, Menu, MenuItem, MaxWidth, Nav, FooterContainer, IconLink, Info } from "./FooterElements";
import { FaGithub, FaPaperclip, FaLinkedin, FaFacebook } from "react-icons/fa";
class Footer extends React.Component {
  render() {
    const goToFacebook = () => {
      window.location.href = "https://www.facebook.com/filip.kozak.509/";
    }
    const goToGithub = () => {
      window.location.href = "https://github.com/Swobodnenerki?tab=repositories";
    }
    return (
        
            <FooterContainer>
                <Menu>
                    <MenuItem><MenuLink to='home' smooth={true} duration={500} spy={true} exact='true' offset={-90}>Home</MenuLink></MenuItem>
                    <MenuItem><MenuLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-90}>About</MenuLink></MenuItem>
                    <MenuItem><MenuLink to='projects'smooth={true} duration={500} spy={true} exact='true' offset={-90}>Projects</MenuLink></MenuItem>
                    <MenuItem><MenuLink to='skills'smooth={true} duration={500} spy={true} exact='true' offset={-90}>Skills</MenuLink></MenuItem>
                    <MenuItem><MenuLink>Contact</MenuLink></MenuItem>
                </Menu>
                <Menu>
                    <MenuItem onClick={goToFacebook}><IconLink><FaFacebook/></IconLink></MenuItem>
                    <MenuItem><IconLink><FaLinkedin/></IconLink></MenuItem>
                    <MenuItem onClick={goToGithub}><IconLink><FaGithub/></IconLink></MenuItem>
                    <MenuItem><IconLink><FaPaperclip/></IconLink></MenuItem>
                </Menu>
                <Info>&copy; 2021 Filip Kozak</Info>
            </FooterContainer>

        
        // <FooterContainer>
        //  <MaxWidth>
        //       <Menu>
        //         <MenuItem><MenuLink to='home' smooth={true} duration={500} spy={true} exact='true' offset={-90}>Home</MenuLink></MenuItem>
        //         <MenuItem><MenuLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-90}>About</MenuLink></MenuItem>
        //         <MenuItem><MenuLink to='projects'smooth={true} duration={500} spy={true} exact='true' offset={-90}>Projects</MenuLink></MenuItem>
        //         <MenuItem><MenuLink to='skills'smooth={true} duration={500} spy={true} exact='true' offset={-90}>Skills</MenuLink></MenuItem>
        //         <MenuItem><MenuLink>Contact</MenuLink></MenuItem>
        //         </Menu>
        //       </MaxWidth>
        // </FooterContainer>
          
      
    );
  }
}
export default Footer;