import React, {useState} from "react";
import Navbar from "../Components/Navbar/index";
import Sidebar from "../Components/Sidebar";
import { About } from "../Sections/About";
import Home from "../Sections/Home/index";
import Projects from "../Sections/Projects/index";


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
    </div>
  );
};
export default MainPage;
