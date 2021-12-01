import React, { useState } from "react";
import {MdMenu} from 'react-icons/md';
import { Logo, MaxWidth, Menu, MenuButton, MenuLink, Nav, MenuItem } from "./NavbarElements";


function Navbar( {toggle} ){
  const [navbar,setNavbar] = useState(false);
  
  const changeBackground = () => {
    if(window.scrollY >= 200){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground)
  return(
      <Nav navbar={navbar}>
        <MaxWidth>
          <Logo navbar={navbar} to='home' smooth={true} duration={500} spy={true} exact='true' offset={-90}>Filip Kozak</Logo>
          <Menu>
            <MenuItem><MenuLink navbar={navbar} to='home' smooth={true} duration={500} spy={true} exact='true' offset={-90}>Home</MenuLink></MenuItem>
            <MenuItem><MenuLink navbar={navbar} to='about' smooth={true} duration={500} spy={true} exact='true' offset={-90}>About</MenuLink></MenuItem>
            <MenuItem><MenuLink navbar={navbar} to='projects'smooth={true} duration={500} spy={true} exact='true' offset={-90}>Projects</MenuLink></MenuItem>
            <MenuItem><MenuLink navbar={navbar} to='skills'smooth={true} duration={500} spy={true} exact='true' offset={-90}>Skills</MenuLink></MenuItem>
            <MenuItem><MenuLink navbar={navbar} to='contact'smooth={true} duration={500} spy={true} exact='true' offset={-90}>Contact</MenuLink></MenuItem>
          </Menu>
          <MenuButton onClick={toggle}><MdMenu/></MenuButton>
        </MaxWidth>

      </Nav>
  )
}
export default Navbar;
