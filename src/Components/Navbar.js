import React, { useState } from "react";
import NavbarStyle from '../Styling/NavbarStyle.css';
import {MdMenu} from 'react-icons/md';
import Link from 'react-scroll';
import styled from 'styled-components'

function Navbar(){
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
    <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div class="max-width">
          <div class="logo">
            <button class="logo">Filip Kozak</button>
          </div>
          <div class="menu">
            <button class="menu-link">Home</button>
            <button class="menu-link">About</button>
            <button class="menu-link">Projects</button>
            <button class="menu-link">Skils</button>
            <button class="menu-link">Passions</button>
            <button class="menu-link">Contact</button>
          </div>
          <button class="menu-button"><MdMenu/></button>
        </div>
      </nav>
  )
}
export default Navbar;
