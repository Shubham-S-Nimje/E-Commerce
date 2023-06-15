import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../../Assets/slider1.jpg'
import slider2 from '../../../Assets/slider2.jpg'
import slider3 from '../../../Assets/slider3.jpg'
import slider4 from '../../../Assets/slider4.jpg'
import slider5 from '../../../Assets/slider5.jpg'


const Carouseldata = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="First slide"
        />
      </Carousel.Item><Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="First slide"
        />
      </Carousel.Item><Carousel.Item>
        <img
          className="d-block w-100"
          src={slider4}
          alt="First slide"
        />
      </Carousel.Item><Carousel.Item>
        <img
          className="d-block w-100"
          src={slider5}
          alt="First slide"
        />
      </Carousel.Item>

    </Carousel>
  )
}

export default Carouseldata
