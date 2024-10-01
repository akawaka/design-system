// src/components/forms/DatePicker.jsx
import PropTypes from 'prop-types';

export const DatePicker = ({ value, onChange, className, ...props }) => {
  const baseStyle = 'border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300';

  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      className={`${baseStyle} ${className}`}
      {...props}
    />
  );
};

DatePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

DatePicker.defaultProps = {
  value: '',
  className: '',
};

export default DatePicker;
