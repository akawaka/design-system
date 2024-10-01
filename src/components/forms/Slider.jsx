// src/components/forms/Slider.jsx
import PropTypes from 'prop-types';

export const Slider = ({ min, max, step, value, className, ...props }) => {
  const baseStyle = 'w-full';

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

  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
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
