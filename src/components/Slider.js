import React, { useState, useEffect } from 'react';
import banner1 from "./../img/banner_img_01.jpg";
import banner2 from "./../img/banner_img_02.jpg";
import banner3 from "./../img/banner_img_03.jpg";

const sliderImages = [banner1, banner2, banner3];
const sliderTexts = [
  {
    title: "Zay eCommerce",
    subtitle: "Fashion is more than just clothing",
    description: "We source our products from top brands and emerging designers...",
  },
  {
    title: "Proident occaecat",
    subtitle: "Aliquip ex ea commodo consequat",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    title: "Repr in voluptate",
    subtitle: "Ullamco laboris nisi ut",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container position-relative">
      <div className="slides">
        <div className="slide d-flex flex-column align-items-center text-center">
          <div className="slide-content">
            <h1 className="h1 text-success"><b>{sliderTexts[currentIndex].title}</b></h1>
            <h3 className="h2">{sliderTexts[currentIndex].subtitle}</h3>
            <p>{sliderTexts[currentIndex].description}</p>
          </div>
          <img src={sliderImages[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="img-fluid" />
        </div>
      </div>

      <div className="slider-controls position-absolute top-50 start-0 translate-middle-y w-100 d-flex justify-content-between px-3">
        <button className="slider-button btn btn-light" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slider-button btn btn-light" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
