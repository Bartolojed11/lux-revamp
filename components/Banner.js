import { Carousel } from 'react-bootstrap'

import adidas from './../public/images/banners/adidas.jpg'
import newBalance from './../public/images/banners/new-balance.jpg'
import nike from './../public/images/banners/nike.jpg'


export default function Banner() {

    return <Carousel>
    <Carousel.Item className="carousel-custom">
      <img
        className="d-block w-100"
        src={newBalance.src}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item  className="carousel-custom">
      <img
        className="d-block w-100"
        src={adidas.src}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item  className="carousel-custom">
      <img
        className="d-block w-100"
        src={nike.src}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
}