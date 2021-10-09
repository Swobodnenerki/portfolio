import React from "react";
import {ProjectsContainer} from './ProjectsElements';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './style.css'
import data from './data'


import myphoto from '../../Photos/p453781.jpg'
class Projects extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     height: 0
  //   }
  // }
  // componentDidMount() {
  //   const height = this.divElement.clientHeight;
  //   this.setState({ height });
  // }
  
  render() {
    return (
      <ProjectsContainer id='projects'>
         <Swiper id="main" style={{backgroundColor: "teal", marginLeft: "10%", marginRight:"10%", marginTop: "50px"}}>
         {data.map((data, idx) => (
                <SwiperSlide data={data} key={idx} style={{backgroundColor: "white", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            
                <div style={{flex: "2 2 300px", backgroundColor: "tomato"}}>
                  <img style={{width: "100%", height: "100%"}} src={data.photo}/>
                </div>
                <div style={{flex: "1 2 300px", backgroundColor: "red"}}>
                  {data.text}
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
          ))}
        </Swiper> */}
        
      </ProjectsContainer>
    );
  }
}
export default Projects;