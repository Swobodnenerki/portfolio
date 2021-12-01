import React, { useRef } from "react";
import {ProjectsContainer, VerticalSwiper, HorizontalSwiper, HorizontalSwiperSlide,
   LeftContainer, Image, RightContainer, ContentContainer, Description, TextContainer, List, ListItem, Difficulty, CustomButton, CustomRating, CustomStarIcon, ProjectTitle} from './ProjectsElements';
import { Swiper, SwiperSlide } from "swiper/react";
import { Header, Divider } from "../About/AboutElements";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './style.css'
import data from './data'
import { FaGithub} from "react-icons/fa";
import SwiperCore, {Navigation, Pagination} from 'swiper';
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
export const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
    return (
      <ProjectsContainer id='projects'>
        <Divider>
            <Header>PROJECTS</Header>
            </Divider>
            {/* <div ref={prevRef} className="cursor-pointer">
              <FaArrowLeft />
          </div> */}
            <Swiper className='swiper-horizontal'
              modules={[Navigation, Pagination]}
              pagination={false}
              navigation={{
                prevEl: prevRef.current ? prevRef.current : undefined,
                nextEl: nextRef.current ? nextRef.current : undefined,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.update();
              }}
            >
              {data.map((item, idx) => (
                <SwiperSlide className='swiper-slider' key={idx}>
                  
                  <LeftContainer>
                    <Image src={item.photo}/>
                  </LeftContainer>
                  <RightContainer>
                    <ProjectTitle className='tytul'>{item.title}</ProjectTitle>
                    <ContentContainer>
                      <Description>{item.description}</Description>
                      <TextContainer>Technologies:</TextContainer>
                      <List>
                        {item.technologies.map((sub, idx2) => (
                        <ListItem key={idx2}>{sub.technology}</ListItem>
                        ))}
                      </List>
                      <Difficulty>
                        <div>Difficulty:</div>
                        <CustomRating name="half-rating-read" defaultValue={item.difficulty} precision={0.5} readOnly emptyIcon={<CustomStarIcon fontSize="inherit"/>}/>
                      </Difficulty>
                      <TextContainer>Contributors:</TextContainer>
                      <List>
                        {item.contributors.map((sub, idx2) => (
                          <ListItem key={idx2}>{sub.contributor}</ListItem>
                          ))}
                      </List>
                    </ContentContainer>
                    <CustomButton href={item.buttonLink} startIcon={<FaGithub />}>{item.buttonMessage}</CustomButton>
                  </RightContainer>
                  
                </SwiperSlide>
                
              ))}
              <div ref={prevRef} class="swiper-button-prev"></div>
              <div ref={nextRef} class="swiper-button-next swiper-button-white"></div>
            </Swiper>

        {/* <div style={{marginTop: '10vh'}}>
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
        </div> */}
        
      </ProjectsContainer>
    );
  
}
export default Projects;