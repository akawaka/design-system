import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
// Button.jsx

export const Button = ({ primary, size, label, ...props }) => {
  const baseStyle = 'font-medium rounded-xl focus:outline-none focus:ring-2';
  const sizeStyle = size === 'large' ? 'py-3 px-6 text-lg' : size === 'small' ? 'py-1 px-3 text-sm' : 'py-2 px-4';
  const primaryStyle = primary
    ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-200';

  return (
    <button type="button" className={`${baseStyle} ${sizeStyle} ${primaryStyle}`} {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
