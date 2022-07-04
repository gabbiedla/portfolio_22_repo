import React, { useState } from 'react';
import people from './data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function Slider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {};

  const prevSlide = () => {};

  const moveDot = () => {};

  return (
    <div className="container-slider">
      <div>
        <h1> HOME </h1>
      </div>
      <div className="container-assets">
        {people.map((person, personIndex) => {
          const { id, image, name, title } = person;

          return (
            <div key={id} className="assets">
              <img src={image} />
              <h4>{name}</h4>
              <p>{title}</p>
            </div>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>

        <div className="container-dots"></div>
      </div>
    </div>
  );
}

export default Slider;
