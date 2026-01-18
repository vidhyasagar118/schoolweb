import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const images = [
  "https://picsum.photos/id/1018/1200/500",
  "https://picsum.photos/id/1015/1200/500",
  "https://picsum.photos/id/1019/1200/500",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="slider">
      {/* Slides */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="slide"
          className={index === current ? "slide active" : "slide"}
        />
      ))}

      {/* Prev / Next */}
      <button className="nav prev" onClick={prevSlide}>❮</button>
      <button className="nav next" onClick={nextSlide}>❯</button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active-dot" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
