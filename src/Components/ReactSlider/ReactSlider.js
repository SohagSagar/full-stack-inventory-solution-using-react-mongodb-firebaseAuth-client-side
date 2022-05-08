import React from 'react';
import {Carousel} from "react-bootstrap";


const ReactSlider = () => {
  return (
    <div>

      <Carousel fade controls={false} indicators={false} interval={2000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://i.ibb.co/YpYkW13/drone.png'
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/tpdCcyq/warehouse.png"
            alt="Second slide"
          />

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/kKFv92K/cam-setup.png"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/9vRK783/lenses.png"
            
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/n0G3d4P/warehouse-2.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ReactSlider;