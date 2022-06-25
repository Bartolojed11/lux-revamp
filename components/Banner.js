import { Carousel } from 'react-bootstrap';

import waifuPink from './../public/images/banners/waifu-pink.jpg';
import waifuRed from './../public/images/banners/waifu-red.jpg';
import waifuWhite from './../public/images/banners/waifu-white.png';


export default function Banner() {

    return <Carousel>
    <Carousel.Item className="carousel-custom">
      <img
        className="d-block w-100"
        src={waifuRed.src}
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
        src={waifuPink.src}
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
        src={waifuWhite.src}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
}