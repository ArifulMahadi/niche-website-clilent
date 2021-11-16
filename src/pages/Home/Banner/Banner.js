import React from 'react';
import image2 from '../../../image/best-italian-cars-ever-12-lamborghini-huracan-evo-rwd-goodwood-07062021.jpg'
import image3 from '../../../image/EwRjI2.jpg'
import image4 from '../../../image/mazda-mx-5-900x600-thumbnail.jpg'

const Banner = () => {
    return (
        
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image3} className="d-block w-100" alt=""/>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt=""/>
          </div>
          <div className="carousel-item">
            <img src={image4} className="d-block w-100" alt=""/>
          </div>
        </div>
      </div>
        
    );
};

export default Banner;