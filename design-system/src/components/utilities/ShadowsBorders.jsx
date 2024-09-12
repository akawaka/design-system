// src/components/utilities/ShadowsBorders.jsx
import PropTypes from 'prop-types';

/**
 * ShadowsBorders component for demonstrating shadow depths and border styles.
 */
export const ShadowsBorders = ({ shadow, border, children, className, ...props }) => {
  const baseStyle = 'p-4 bg-white'; // Base style to visualize shadows and borders
  const shadowStyle = shadow ? `shadow-${shadow}` : '';
  const borderStyle = border ? `border-${border} border` : '';

  return (
    <div className={`${baseStyle} ${shadowStyle} ${borderStyle} ${className}`} {...props}>
      {children}
    </div>
  );
};

ShadowsBorders.propTypes = {
  /**
   * Shadow depth (sm, md, lg, xl, 2xl)
   */
  shadow: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  /**
   * Border size (sm, md, lg, xl)
   */
  border: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /**
   * Content to display inside the ShadowsBorders component
   */
  children: PropTypes.node,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

ShadowsBorders.defaultProps = {
  shadow: 'md',
  border: 'md',
  children: 'Shadow and Border Example',
  className: '',
};

export default ShadowsBorders;
