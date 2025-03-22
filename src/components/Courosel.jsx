import React, { useState } from 'react';
import "./Courosel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Courosel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className='courosel'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
      {data.map((item, index) => (
        <div className={slide === index ? "slide" : "slide slide-hidden"} key={index}>
          <img src={item.src} alt={item.alt} />
          <div className="slide-text">{item.text}</div> {/* Text over the image */}
        </div>
      ))}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
      <span className='indicators'>
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={slide === index ? 'indicator' : "indicator indicator-inactive"}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Courosel;