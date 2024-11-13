import React, { useState, useEffect, useRef } from 'react';
const image1 = `${process.env.PUBLIC_URL}/image1.png`;
const image2 = `${process.env.PUBLIC_URL}/image2.png`;
const image3 = `${process.env.PUBLIC_URL}/image3.png`;


const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const intervalRef = useRef(null);

  const bullets = [1, 2, 3];
  const texts = [
    "Stay on Top of Your Tasks",
    "Conquer Your Productivity",
    "Organize Your Day, Achieve Your Goals",
  ];

  useEffect(() => {
    // Set up the interval to change the active index every 3 seconds
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex % bullets.length) + 1);
    }, 2000);

    // Clean up the interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="carousel">
      <div className="images-wrapper">
        {bullets.map((bullet) => (
          <img
            key={bullet}
            src={activeIndex === 1 ? image1 : activeIndex === 2 ? image2 : activeIndex === 3 ? image3 : null}
            className={`image img-${bullet} ${activeIndex === bullet ? 'show' : ''}`}
          />
        ))}
      </div>
      <div className="text-slider">
        <div className="text-wrap">
          <div
            className="text-group"
            style={{ transform: `translateY(${-(activeIndex - 1) * 2.2}rem)` }}
          >
            {texts.map((text, index) => (
              <h2 key={index}>{text}</h2>
            ))}
          </div>
        </div>
        <div className="bullets">
          {bullets.map((bullet) => (
            <span
              key={bullet}
              className={activeIndex === bullet ? 'active' : ''}
              onClick={() => setActiveIndex(bullet)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;