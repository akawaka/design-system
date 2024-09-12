// src/components/forms/DatePicker.jsx
import PropTypes from 'prop-types';

/**
 * DatePicker component for selecting dates.
 */
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
  /**
   * Current value of the date picker
   */
  value: PropTypes.string,
  /**
   * Function to handle date change
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

DatePicker.defaultProps = {
  value: '',
  className: '',
};

export default DatePicker;
