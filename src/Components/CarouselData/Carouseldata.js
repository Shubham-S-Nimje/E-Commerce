import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



const Carouseldata = () => {
  return (
    <Carousel>
      <Carousel.Item className="d-block h-50">
        <img height={300}
          className="d-block w-100"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={300}
          className="d-block w-100"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={300}
          className="d-block w-100"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carouseldata
