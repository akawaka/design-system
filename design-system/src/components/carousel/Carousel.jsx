import PropTypes from "prop-types";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export const Carousel = ({ images, loop }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeTransition, setFadeTransition] = useState(false);

  const handleImageChange = (newIndex) => {
    setFadeTransition(true);
    setCurrentIndex(newIndex);
  };

  const handleTransitionEnd = () => {
    setFadeTransition(false);
  };

  const goToPrevious = () => {
    if (!loop && currentIndex === 0) return;
    const newIndex = currentIndex === 0 ? (loop ? images.length - 1 : 0) : currentIndex - 1;
    handleImageChange(newIndex);
  };

  const goToNext = () => {
    if (!loop && currentIndex === images.length - 1) return;
    const newIndex = currentIndex === images.length - 1 ? (loop ? 0 : images.length - 1) : currentIndex + 1;
    handleImageChange(newIndex);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`object-cover w-full h-64 transition-opacity duration-300 ${
            fadeTransition ? "opacity-0" : "opacity-100"
          }`}
          onTransitionEnd={handleTransitionEnd}
        />
      </div>

      <button
        onClick={goToPrevious}
        disabled={!loop && currentIndex === 0}
        className={`absolute -left-4 p-2 transform -translate-x-full -translate-y-1/2 bg-gray-950 rounded-full top-1/2 hover:bg-gray-800 ${
          !loop && currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
        }`}
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        disabled={!loop && currentIndex === images.length - 1}
        className={`absolute -right-4 p-2 transform translate-x-full -translate-y-1/2 bg-gray-950 rounded-full top-1/2 hover:bg-gray-800 ${
          !loop && currentIndex === images.length - 1 ? "opacity-30 cursor-not-allowed" : ""
        }`}
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  loop: PropTypes.bool,
};

Carousel.defaultProps = {
  loop: true,
};

export default Carousel;
