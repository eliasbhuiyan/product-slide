import React, { useState } from "react";
import "./eb.pslide.css";
const ProductSlide = ({ api, settings }) => {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState("0% 0%");
  const [zoom, setZoom] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition(`${x}% ${y}%`);
  };
  return (
    <div
      className={`productDetails_card ${
        settings.direction ? settings.direction : "horizontal"
      } `}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setZoom(settings.zoom === false ? false : true)}
        onMouseLeave={() => setZoom(false)}
        className="large_image_wrap"
      >
        <img
          className={`image ${zoom ? "zoom" : ""}`}
          src={api[index]}
          width="100%"
          alt="large-image"
        />
        {zoom && (
          <div
            className="zoomed-image"
            style={{
              backgroundImage: `url(${api[index]})`,
              backgroundPosition: position,
            }}
          />
        )}
      </div>
      <div className="thumble_imge_wrap">
        {api.map((item, i) => (
          <div
            onClick={() => setIndex(i)}
            key={i}
            className={`thumle_items ${i === index ? "active" : ""}`}
          >
            <img src={item} alt="small-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlide;
