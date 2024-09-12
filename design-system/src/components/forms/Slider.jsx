// src/components/forms/Slider.jsx
import PropTypes from 'prop-types';

/**
 * Slider component for range and discrete step sliders.
 */
export const Slider = ({ min, max, step, value, className, ...props }) => {
  const baseStyle = 'slider w-full';

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      className={`${baseStyle} ${className}`}
      {...props}
    />
  );
};

Slider.propTypes = {
  /**
   * Minimum value of the slider
   */
  min: PropTypes.number,
  /**
   * Maximum value of the slider
   */
  max: PropTypes.number,
  /**
   * Step size for the slider
   */
  step: PropTypes.number,
  /**
   * Current value of the slider
   */
  value: PropTypes.number,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  className: '',
};

export default Slider;
