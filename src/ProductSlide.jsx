import React, { useState } from "react";
import "./productSlide.css";
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
  if (!Array.isArray(api)) {
    return (
      <>
        <div className="eb_loading_eb">
          <div className="loading-box">
            <div className="grid">
              <div className="color l1"></div>
              <div className="color l2"></div>
              <div className="color l3"></div>
              <div className="color l4"></div>
              <div className="color l5"></div>
              <div className="color l6"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div
      className={`eb_productDetails_card ${
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
