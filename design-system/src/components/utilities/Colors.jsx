// src/components/utilities/Colors.jsx
import PropTypes from 'prop-types';

/**
 * Colors component for demonstrating primary, secondary, and tertiary color palettes.
 */
export const Colors = ({ color, children, className, ...props }) => {
  const baseStyle = 'p-4 text-white font-semibold'; // Base style to visualize colors
  const colorStyle = {
    primary: 'bg-blue-500',
    secondary: 'bg-green-500',
    tertiary: 'bg-red-500',
  };

  return (
    <div className={`${baseStyle} ${colorStyle[color]} ${className}`} {...props}>
      {children || color}
    </div>
  );
};

Colors.propTypes = {
  /**
   * Color type (primary, secondary, tertiary)
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
  /**
   * Content to display inside the Colors component
   */
  children: PropTypes.node,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

Colors.defaultProps = {
  children: '',
  className: '',
};

export default Colors;
