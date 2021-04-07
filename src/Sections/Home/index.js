import React from "react";
import {HomeBackground, HomeWrapper, HomeText2, HomeText1, HomeText3, HomeTextSpan, HomeStars} from './HomeElements';
class Home extends React.Component {
  render() {
    return (
      <HomeBackground id='home'>
        <HomeStars>
        <HomeWrapper>
          {/* <HomeText1>Hello, my name is</HomeText1> */}
          <HomeText2>Filip Kozak</HomeText2>
          {/* <HomeText3>I'm a  */}
            <HomeTextSpan>software developer</HomeTextSpan>
          {/* </HomeText3> */}
        </HomeWrapper>
        </HomeStars>
      </HomeBackground>
    );
  }
}
export default Home;