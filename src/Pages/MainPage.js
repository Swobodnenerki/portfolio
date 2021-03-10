import React, {useState} from "react";
import Navbar from "../Components/Navbar/index";
import Sidebar from "../Components/Sidebar";
import { About } from "../Sections/About";
import Home from "../Sections/Home/index";


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
    </div>
  );
};
export default MainPage;
