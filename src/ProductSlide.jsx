import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import "./productSlide.css";

const ProductSlide = ({ 
  images = [], 
  settings = {
    direction: "horizontal",
    zoom: true,
    thumbnailPosition: "bottom",
    transitionDuration: 300
  },
  className = "",
  style = {},
  mainImageWrapperClassName = "",
  mainImageWrapperStyle = {},
  mainImageClassName = "",
  mainImageStyle = {},
  zoomedImageClassName = "",
  zoomedImageStyle = {},
  thumbnailsWrapperClassName = "",
  thumbnailsWrapperStyle = {},
  thumbnailClassName = "",
  thumbnailStyle = {},
  activeThumbnailClassName = "",
  activeThumbnailStyle = {},
  onSlideChange = () => {}
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomPosition, setZoomPosition] = useState("0% 0%");
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition(`${x}% ${y}%`);
  }, []);

  const handleThumbnailClick = useCallback((index) => {
    setCurrentIndex(index);
    onSlideChange(index);
  }, [onSlideChange]);

  const toggleZoom = useCallback((shouldZoom) => {
    if (settings.zoom !== false) {
      setIsZoomed(shouldZoom);
    }
  }, [settings.zoom]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowRight") {
      setCurrentIndex(prev => (prev + 1) % images.length);
    } else if (e.key === "ArrowLeft") {
      setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    }
  }, [images.length]);

  return (
    <div 
      className={`eb_productDetails_card ${settings.direction} ${className}`}
      style={style}
      tabIndex="0" 
      onKeyDown={handleKeyDown}
    >
      <div
        className={`large_image_wrap ${mainImageWrapperClassName}`}
        style={mainImageWrapperStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => toggleZoom(true)}
        onMouseLeave={() => toggleZoom(false)}
        aria-label="Product image zoom area"
      >
        <img
          className={`main-image ${isZoomed ? "zoom" : ""} ${mainImageClassName}`}
          src={images[currentIndex]}
          alt={`Product view ${currentIndex + 1}`}
          style={{
            transition: `transform ${settings.transitionDuration}ms ease`,
            ...mainImageStyle
          }}
        />
        
        {isZoomed && (
          <div
            className={`zoomed-image ${zoomedImageClassName}`}
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundPosition: zoomPosition,
              transition: `background-position ${settings.transitionDuration}ms ease`,
              ...zoomedImageStyle
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {images.length > 1 && (
        <div 
          className={`thumble_imge_wrap ${settings.thumbnailPosition} ${thumbnailsWrapperClassName}`}
          style={thumbnailsWrapperStyle}
        >
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleThumbnailClick(index)}
              className={`thumle_items ${index === currentIndex ? `active ${activeThumbnailClassName}` : ""} ${thumbnailClassName}`}
              style={{
                ...thumbnailStyle,
                ...(index === currentIndex ? activeThumbnailStyle : {})
              }}
              aria-label={`View product image ${index + 1}`}
              aria-current={index === currentIndex}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`} 
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

ProductSlide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  settings: PropTypes.shape({
    direction: PropTypes.oneOf(["horizontal", "vertical"]),
    zoom: PropTypes.bool,
    thumbnailPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    transitionDuration: PropTypes.number
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  mainImageWrapperClassName: PropTypes.string,
  mainImageWrapperStyle: PropTypes.object,
  mainImageClassName: PropTypes.string,
  mainImageStyle: PropTypes.object,
  zoomedImageClassName: PropTypes.string,
  zoomedImageStyle: PropTypes.object,
  thumbnailsWrapperClassName: PropTypes.string,
  thumbnailsWrapperStyle: PropTypes.object,
  thumbnailClassName: PropTypes.string,
  thumbnailStyle: PropTypes.object,
  activeThumbnailClassName: PropTypes.string,
  activeThumbnailStyle: PropTypes.object,
  onSlideChange: PropTypes.func
};
export default ProductSlide;