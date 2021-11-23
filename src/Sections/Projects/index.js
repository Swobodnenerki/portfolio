import React from "react";
import {ProjectsContainer, VerticalSwiper, HorizontalSwiper, HorizontalSwiperSlide, LeftContainer, Image, RightContainer} from './ProjectsElements';
import { Swiper, SwiperSlide } from "swiper/react";
import { Spacer, Header, Title, Divider } from "../About/AboutElements";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './style.css'
import data from './data'
import data2 from './data2'
import './SwiperStyle.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { FaGithub} from "react-icons/fa";

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
        <Divider>
            <Header>PROJECTS</Header>
            </Divider>

<Swiper id="main" showArrows={false} style={{backgroundColor: "teal", marginTop: "50px", width: '90%'}}>
         {data2.map((data2, idx) => (
                <SwiperSlide data={data2} key={idx} style={{backgroundColor: "#090B0E", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            
                <div ref={(divElement)=> {this.divElement=divElement}} style={{flex: "3 3 800px", backgroundColor: "tomato", margin: '30px'}}>
                  <img style={{width: "100%", height: "100%"}} src={data2.photo}/>
                </div>
                <div style={{flex: "1 3 400px", backgroundColor: "#090B0E", display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '30px'}}>
                <Title className='tytul'>JOYFINDER</Title>
                  <div style={{overflow: 'auto'}}>
                    <div class='opis' style={{marginLeft: '30px', marginTop: '30px', marginRight: '30px', textAlign: 'justify'}}>Web and mobile app for searching, hosting and attending events in your neighbourhood. You are provided with many types of search tools to never be bored again! Web part of app is hosted on heroku</div>
                    <div class='technologie' style={{marginTop: '20px', marginLeft: '30px', marginRight: '30px'}}>Technologies:</div>
                    <ul style={{fontSize: '18px', marginLeft: '10px', marginRight: '30px'}}>
                      <li class='technologia' style={{marginBottom: '10px'}}>Backend: Java - PostgreSQL - SpringData - Spring</li>
                      <li class='technologia' style={{marginBottom: '10px'}}>Frontend: JavaScript - React - Google Maps</li>
                    </ul>
                      {/* <div style={{marginTop: '20px', fontSize: '20px', textAlign: 'center', marginLeft: '30px', marginRight: '30px',}}>Spring - Java - PostgreSQL - React - Google Maps</div> */}
                    <div  style={{display: 'flex', marginTop: '20px', flexDirection: 'row', marginLeft: '30px', marginRight: '30px', justifyContent: 'space-between'}}>
                      <div class='trudnosc'>Difficulty:</div>
                      <Rating className='gwiazdki' name="half-rating-read" style={{color: "white", fontSize: '27px'}} defaultValue={2.5} precision={0.5} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55, color: 'white' }} fontSize="inherit" />}/>
                    </div>
                    <div class='wspoltworcy' style={{marginTop: '20px', marginLeft: '30px', marginRight: '30px'}}>Contributors:</div>
                    <ul style={{fontSize: '18px', marginLeft: '10px', marginRight: '30px'}}>
                      <li class='wspoltworca' style={{marginBottom: '10px'}}>Paweł Owczrek</li>
                      <li class='wspoltworca' style={{marginBottom: '10px'}}>Wojciech Nokielski</li>
                    </ul>
                  </div>
                <Button className='przycisk' startIcon={<FaGithub />}>Find on Github</Button>
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
            backgroundColor: '#090B0E',
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
                  margin: '30px',
                  
                }}
              >
                <Swiper
                  style={{
                    width: '100%',
                    backgroundColor: '#090B0E',
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
              <div className='right-container' style={{ flexBasis: '30%', display: 'flex', flexDirection: 'column', margin: '30px', justifyContent: 'space-between'  }}>
                <Title style={{}}>{item.title}</Title>
                  <div style={{overflow: 'auto'}}>
                    <div style={{marginLeft: '30px', marginTop: '30px', marginRight: '30px', fontSize: '20px', textAlign: 'justify'}}>{item.description}</div>
                    <div style={{marginTop: '20px', fontSize: '25px', marginLeft: '30px', marginRight: '30px'}}>Technologies:</div>
                    
                  <ul style={{fontSize: '18px', marginLeft: '10px', marginRight: '30px'}}>
                  {item.technologies.map((sub, idx2) => (
                    <li key={idx2} style={{marginBottom: '10px'}}>
                     {sub.technology}
                    </li>
                  ))}
                </ul>
                    
                      {/* <div style={{marginTop: '20px', fontSize: '20px', textAlign: 'center', marginLeft: '30px', marginRight: '30px',}}>Spring - Java - PostgreSQL - React - Google Maps</div> */}
                    <div style={{display: 'flex', marginTop: '20px', flexDirection: 'row', marginLeft: '30px', marginRight: '30px', justifyContent: 'space-between'}}>
                      <div style={{fontSize: '25px', marginRight: '100px'}}>Difficulty:</div>
                      <Rating name="half-rating-read" style={{color: "white", fontSize: '27px'}} defaultValue={item.difficulty} precision={0.5} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55, color: 'white' }} fontSize="inherit" />}/>
                    </div>
                    <div style={{marginTop: '20px', fontSize: '25px', marginLeft: '30px', marginRight: '30px'}}>Authors:</div>
                    <ul style={{fontSize: '18px', marginLeft: '10px', marginRight: '30px'}}>
                      {item.contributors.map((sub, idx2) => (
                        <li key={idx2} style={{marginBottom: '10px'}}>
                          {sub.contributor}
                    
                        </li>   
                      ))}
                    </ul>
              
                  </div>
                <Button href={item.buttonLink} style={{backgroundColor: '#fff', padding: '10px 0', fontSize: '1rem', marginTop: '20px', color: 'black', fontFamily: 'Ubuntu', marginLeft: '30px'}} startIcon={<FaGithub />}>{item.buttonMessage}</Button>
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