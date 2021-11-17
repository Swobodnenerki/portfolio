import React, {useState} from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/index";
import Sidebar from "../Components/Sidebar";
import { About } from "../Sections/About";
import { Contact } from "../Sections/Contact";
import Home from "../Sections/Home/index";
import Projects from "../Sections/Projects/index";
import Skills from "../Sections/Skills";



const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return(
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
};
export default MainPage;
