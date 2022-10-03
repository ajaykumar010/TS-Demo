import React from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';


export const Popuplogin = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={2000}>
        <Image
          className="d-block w-100"
          src={"/images/banner-web-design-2.jpg"}
          alt="First slide"
          height={600}
          width={2000}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          className="d-block w-100"
          src={"/images/web-development-banner1.jpg"}
          alt="Second slide"
          height={600}
          width={2000}
        />
      </Carousel.Item>
    </Carousel>
  
    </>
  )
}
