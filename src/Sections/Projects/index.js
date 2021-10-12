import React from "react";
import {ProjectsContainer, VerticalSwiper, HorizontalSwiper, HorizontalSwiperSlide, LeftContainer, Image, RightContainer} from './ProjectsElements';
import { Swiper, SwiperSlide } from "swiper/react";
import { Spacer, Header, Title } from "../About/AboutElements";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './style.css'
import data from './data'
import data2 from './data2'
import './SwiperStyle.css'


import myphoto from '../../Photos/p453781.jpg'
class Projects extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0
    }
  }
  componentDidMount() {
    const height = this.divElement.clientHeight;
    this.setState({ height });
  }
  
  render() {
    return (
      <ProjectsContainer id='projects'>
        <Spacer/>
            <Header>PROJECTS</Header>

<Swiper id="main" style={{backgroundColor: "teal", marginLeft: "5%", marginRight:"5%", marginTop: "50px"}}>
         {data2.map((data2, idx) => (
                <SwiperSlide data={data2} key={idx} style={{backgroundColor: "white", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            
                <div ref={(divElement)=> {this.divElement=divElement}} style={{flex: "3 3 800px", backgroundColor: "tomato"}}>
                  <img style={{width: "100%", height: "100%"}} src={data2.photo}/>
                </div>
                <div style={{flex: "1 3 400px", backgroundColor: "red" , overflow: 'auto', maxHeight: '600px'}}>
                  
                  <Title style={{marginTop: '30px'}}>JOYFINDER</Title>
                <div style={{marginLeft: '30px', marginTop: '30px', marginRight: '30px', fontSize: '20px', textAlign: 'justify'}}>Web and mobile app for searching, hosting and attending events in your neighbourhood. You are provided with many types of search tools to never be bored again! Web part of app is hosted on heroku</div>
                <div style={{marginTop: '30px', fontSize: '25px', textAlign: 'center'}}>Technologies</div>
                <ul style={{fontSize: '18px', }}>
                  <li>Backend: Spring, Java, PostgreSQL, SpringData</li>
                  <li>Frontend: JavaScript, React, Google Maps, Google Geocode</li>
                </ul>
                <div></div>
                <h1 style={{textAlign: 'center'}}>JoyFinder</h1>
                <h1 style={{textAlign: 'center'}}>JoyFinder</h1>
                <h1 style={{textAlign: 'center'}}>JoyFinder</h1>
                <h1 style={{textAlign: 'center'}}>JoyFinder</h1>
                <h1 style={{textAlign: 'center'}}>JoyFinder</h1>
                </div>
              </SwiperSlide>
            ))}
          
          
        </Swiper>

                {/* <Swiper style={{backgroundColor: "teal", marginLeft: "10%", marginRight:"10%", marginTop: "50px",}}>
        {data.map((item, idx) => (
          <SwiperSlide data={item} key={idx} style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>
              <Swiper direction={'vertical'} spaceBetween={50} style={{flex: "2 2 400px", backgroundColor: "tomato"}}>
                {item.photos.map((sub, idx2)=>
                <SwiperSlide data={sub} key={idx2}>
                  <div className="test" ref={(divElement)=> {this.divElement=divElement}}>
                  <img style={{width: "100%", height: "100%",display: "block", objectFit: "cover"}} src={sub.photo}/>
                  </div>
                </SwiperSlide>
                )}
              </Swiper>
            <div style={{flex: "1 2 400px", backgroundColor: "red"}}>
              {item.text}
            </div>
          </SwiperSlide>
         

       

      


        {/* <HorizontalSwiper direction="horizontal">
          {data.map((item, idx) => (
            <HorizontalSwiperSlide key ={idx}>
              <LeftContainer>
                <VerticalSwiper direction={"vertical"}>
                {item.photos.map((sub, idx2) => (
                  <SwiperSlide key={idx2}>
                    <Image src={sub.photo}/>
                  </SwiperSlide>
                  ))}
                </VerticalSwiper>
              </LeftContainer>
              <RightContainer>
                {item.text}
              </RightContainer>
            </HorizontalSwiperSlide>
            ))}
        </HorizontalSwiper> */}

        <div style={{marginTop: '10vh'}}>
        <Swiper className='horizontal-swiper'
        style={{
            height: '70vh',
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
          }}
          direction='horizontal'
        >
          {data.map((item, idx) => (
            <SwiperSlide className='horizontal-swiper-slide' style={{ display: 'flex' }} key={idx}>
              <div className='left-containe'
                style={{
                  
                  display: 'flex',
                  flexBasis: '70%',
                  justifyContent: 'stretch',
                }}
              >
                <Swiper
                  style={{
                    width: '100%',
                    backgroundColor: 'maroon',
                  }}
                  direction={'vertical'}
                >
                  {item.photos.map((sub, idx2) => (
                    <SwiperSlide className='vertical-swiper' key={idx2}>
                      <img className='swiper-image'
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                        src={sub.photo}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className='right-container' style={{ flexBasis: '30%', backgroundColor:'#090B0E', overflow: 'auto'  }}>
                <Title style={{marginTop: '30px'}}>JOYFINDER</Title>
                <div style={{marginLeft: '30px', marginTop: '30px', marginRight: '30px', fontSize: '20px', textAlign: 'justify'}}>Web and mobile app for searching, hosting and attending events in your neighbourhood. You are provided with many types of search tools to never be bored again! Web part of app is hosted on heroku</div>
                <div style={{marginTop: '30px', fontSize: '25px', textAlign: 'center'}}>Technologies</div>
                <ul style={{fontSize: '18px', }}>
                  <li>Backend: Spring, Java, PostgreSQL, SpringData</li>
                  <li>Frontend: JavaScript, React, Google Maps, Google Geocode</li>
                </ul>
                <div></div>
                <h1 style={{textAlign: 'center'}}>JoyFinder</h1>
                <h1 style={{textAlign: 'center'}}>JoyFinder</h1>
                <h1 style={{textAlign: 'center'}}>JoyFinder</h1>
                <h1 style={{textAlign: 'center'}}>JoyFinder</h1>
                <h1 style={{textAlign: 'center'}}>JoyFinder</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        
      </ProjectsContainer>
    );
  }
}
export default Projects;