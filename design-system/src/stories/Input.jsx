// src/components/Input.jsx
import PropTypes from 'prop-types';

/**
 * Input field component for user input
 */
export const Input = ({ size, placeholder, value, onChange, ...props }) => {
  const baseStyle = 'border rounded-md focus:outline-none focus:ring-2';
  const sizeStyle = size === 'large' ? 'p-3 text-lg' : size === 'small' ? 'p-1 text-sm' : 'p-2';

  return (
    <input
      type="text"
      className={`${baseStyle} ${sizeStyle}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

Input.propTypes = {
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Placeholder text for the input field
   */
  placeholder: PropTypes.string,
  /**
   * Value of the input field
   */
  value: PropTypes.string,
  /**
   * Optional change handler
   */
  onChange: PropTypes.func,
};

Input.defaultProps = {
  size: 'medium',
  placeholder: 'Enter text...',
  value: '',
  onChange: undefined,
};

export default Input;
