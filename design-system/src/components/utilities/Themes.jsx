// src/components/utilities/Themes.jsx
import PropTypes from 'prop-types';

/**
 * Themes component for demonstrating light, dark, and high-contrast modes.
 */
export const Themes = ({ theme, children, className, ...props }) => {
  const baseStyle = 'p-4';
  const themeStyle = {
    light: 'bg-white text-black',
    dark: 'bg-gray-800 text-white',
    highContrast: 'bg-black text-yellow-300',
  };

  return (
    <div className={`${baseStyle} ${themeStyle[theme]} ${className}`} {...props}>
      {children || `${theme.charAt(0).toUpperCase() + theme.slice(1)} Theme`}
    </div>
  );
};

Themes.propTypes = {
  /**
   * Theme type (light, dark, highContrast)
   */
  theme: PropTypes.oneOf(['light', 'dark', 'highContrast']).isRequired,
  /**
   * Content to display inside the Themes component
   */
  children: PropTypes.node,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

Themes.defaultProps = {
  children: '',
  className: '',
};

export default Themes;
