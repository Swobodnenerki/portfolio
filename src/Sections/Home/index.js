import React from "react";
import HomeStyle from '../../Styling/HomeStyle.css';
import {HomeBackground, HomeWrapper, HomeText2, HomeText1, HomeText3, HomeTextSpan} from './HomeElements';
class Home extends React.Component {
  render() {
    return (
      <HomeBackground id='home'>
        <HomeWrapper>
          <HomeText1>Hello, my name is</HomeText1>
          <HomeText2>Filip Kozak</HomeText2>
          <HomeText3>I'm a <HomeTextSpan>student</HomeTextSpan></HomeText3>
        </HomeWrapper>
      </HomeBackground>
    );
  }
}
export default Home;