import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Sections/Home";
class MainPage extends React.Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Home/>
        </div>
    );
  }
}
export default MainPage;
