import React from 'react'
import "./Featured.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ge from '../../images/pexels-photo-5632758.jpeg'
import ew from '../../images/pexels-sandy-torchon-9567231.jpg'
import ww from '../../images/pexels-photo-11241291.jpeg'
import pp from '../../images/pexels-berk-ozdemir-3779837.jpg'
import lq from '../../images/teodor-kuduschiev-9WldcLRve4Y-unsplash.jpg'
import fe from '../../images/pexels-ethan-brooke-2376712.jpg'
import fs from '../../images/alexandre-st-louis-8gQ3awNLDOY-unsplash.jpg'

const Featured = () => {
    const settings = {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true
      };
      const style={
        marginLeft: '75px'
      };
  return (
    <div className="slide">
        <div>
            <h5 className="htmi">Relax Your Mind</h5>
            <h2 className="hi">Top Destinations</h2>
            <p className="nio">Go beyond the surface of the world’s must-see travel destinations. Discover our authentic, unforgettable experiences and explore the world for real.</p>
        </div>
        <Slider {...settings}>
      <div>
        <div className="card" style={style}>
            <img className="op" src={ge} alt="" />
            <h3 className="th">Paris, France</h3>
        </div>
      </div>
      <div>
      <div className="card" style={style}>
            <img className="op" src={ew} alt="" />
            <h3 className="th">New York, USA</h3>
        </div>
      </div>
      <div>
      <div className="card" style={style}>
            <img className="op" src={ww} alt="" />
            <h3 className="th">London, UK</h3>
        </div>
      </div>
      <div>
      <div className="card" style={style}>
            <img className="op" src={pp} alt="" />
            <h3 className="th">Tokyo, Japan</h3>
        </div>
      </div>
      <div>
      <div className="card" style={style}>
            <img className="op" src={lq} alt="" />
            <h3 className="tx">Singapore</h3>
        </div>
      </div>
      <div>
      <div className="card" style={style}>
            <img className="op" src={fe} alt="" />
            <h3 className="tty">Seoul, South Korea</h3>
        </div>
      </div>
      <div>
      <div className="card" style={style}>
            <img className="op" src={fs} alt="" />
            <h3 className="th">Toronto, Canada</h3>
        </div>
      </div>
    </Slider>
    </div>
  )
}

export default Featured