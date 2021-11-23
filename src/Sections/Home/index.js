import React from "react";
import { About1stColumn, About2stColumn } from "../About/AboutElements";
import {HomeBackground, HomeWrapper, HomeText2, HomeText1, HomeText3, HomeTextSpan, HomeStars, Image, HomePhotoContainer, TextHomeContainer} from './HomeElements';
import photo from '../../Photos/me.png'
class Home extends React.Component {
  render() {
    return (
      <HomeBackground id='home'>
        <TextHomeContainer>
        <HomeWrapper>
          {/* <HomeText1>Hello, my name is</HomeText1> */}
          <HomeText2>Filip Kozak</HomeText2>
          {/* <HomeText3>I'm a  */}
            <HomeTextSpan>software developer</HomeTextSpan>
          {/* </HomeText3> */}
        </HomeWrapper>
        </TextHomeContainer>
        <HomePhotoContainer>
          <Image src={photo}/>
        </HomePhotoContainer>
        
      </HomeBackground>
    );
  }
}
export default Home;