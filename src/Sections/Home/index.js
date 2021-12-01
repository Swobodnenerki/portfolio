import React from "react";
import {HomeBackground, HomeWrapper, HomeText2, HomeTextSpan, Image, HomePhotoContainer, TextHomeContainer, VideoBg, HeroContainer, HeroBg} from './HomeElements';
import photo from '../../Photos/me4.png'
import video from '../../Photos/video.mp4'
class Home extends React.Component {
  render() {
    return (
      // <HomeBackground id='home'>
      //   <div
      //   style={{
      //     position: "absolute",
      //     height: "100vh",
      //     width: "100vw",
      //     backgroundColor: 'black',
      //     zIndex: "2",
      //     opacity: "0.5"
      //   }}
      // />
      //   <TextHomeContainer>
      //   <HomeWrapper>
      //     {/* <HomeText1>Hello, my name is</HomeText1> */}
      //     <HomeText2>Filip Kozak</HomeText2>
      //     {/* <HomeText3>I'm a  */}
      //       <HomeTextSpan>software developer</HomeTextSpan>
      //     {/* </HomeText3> */}
      //   </HomeWrapper>
      //   </TextHomeContainer>
      //   <HomePhotoContainer>
      //     <Image src={photo}/>
      //   </HomePhotoContainer>
      // </HomeBackground>
      <HeroContainer id='home'>
        <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100%",
          backgroundColor: '#070B64',
          zIndex: "2",
          opacity: "0.3",
          overflow: 'hidden',
        }}
      />
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
        </HeroBg>
        <TextHomeContainer>
        <HomeWrapper>
          <HomeText2>Filip Kozak</HomeText2>
            <HomeTextSpan>software developer</HomeTextSpan>
        </HomeWrapper>
        </TextHomeContainer>
        <HomePhotoContainer>
          <Image src={photo}/>
        </HomePhotoContainer>
      </HeroContainer>
    );
  }
}
export default Home;