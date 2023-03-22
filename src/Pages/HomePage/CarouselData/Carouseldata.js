import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



const Carouseldata = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41FBwjCnS2L._SX1500_.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61+t8fT27KL._SX3000_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81X2o7iOt+L._SX3000_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel>
  )
}

export default Carouseldata
