import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sliderImage from '../assets/slider1.jpg';
import sliderImage2 from '../assets/ad1.png';

import './slider.css'



const Slider = () => {
  return (
    <>
      <div className='slider'>
      <Carousel>
      <Carousel.Item>
        <img width={1300} height={200} src={sliderImage}text="First slide" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  width={1300} height={200} src={sliderImage2} text="Second slide" />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  width={1300} height={200} src={sliderImage} text="Third slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>


    </>
  );
}

export default Slider;
