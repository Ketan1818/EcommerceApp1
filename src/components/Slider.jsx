import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Style/Slider.css'
import img1 from '../assets/img1slider.png'
import img2 from '../assets/img2s.png'
import img3 from '../assets/img3s.png'

export default function SimpleSlider() {
  var settings = {
    dots: false,
    centerMode: false,
    arrows: false,
    cssEase: 'ease-in-out',
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>


      <div className="slider1">
        <div className="nav1-left">
            <h1 className="h1">Upto 50% off on <br /> all Mens Wear</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Molestiae consequuntur accusantium fugit. </p>
            <button className="btn">Order Now</button>
        </div>
      
      </div>
      <div className="nav1-right">
            <img src={img1} alt="" className="photos"/>
      </div>
      <div className="slider1">
        <div className="nav1-left">
            <h1 className="h1">70% off on all<br /> Products Sale</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <button className="btn">Order Now</button>
        </div>
      
      </div>
      <div className="nav1-right">
            <img src={img2} alt=""   className="photos"/>
      </div>
      <div className="slider1">
        <div className="nav1-left">
            <h1 className="h1">30% off on all<br /> Womens Wear</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>lorem5Lorem ipsum dolor, sit amet consectetur adipisicing elit.lorem5 </p>
            <button className="btn">Order Now</button>
        </div>
      
      </div>
      <div className="nav1-right">
            <img src={img3} alt=""   className="photos"/>
      </div>
      
    </Slider>
  );
}