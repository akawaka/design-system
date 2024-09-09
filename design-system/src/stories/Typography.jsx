// src/components/Typography.jsx
import PropTypes from 'prop-types';

/**
 * Typography component for displaying text with different HTML tags and styles
 */
export const Typography = ({ variant, children, ...props }) => {
  // Define base styles and variant-specific styles
  const baseStyle = 'font-sans';
  const variantStyle = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    h4: 'text-xl font-normal',
    h5: 'text-lg font-light',
    h6: 'text-base font-thin',
    p: 'text-base',
  };

  return (
    <div className={`${baseStyle} ${variantStyle[variant]}`} {...props}>
      {children}
    </div>
  );
};

Typography.propTypes = {
  /**
   * HTML tag to render (e.g., h1, h2, p, etc.)
   */
  as: PropTypes.string,
  /**
   * Typography variant defines the style
   */
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  /**
   * Content to display inside the Typography component
   */
  children: PropTypes.node.isRequired,
};

Typography.defaultProps = {
  as: 'p',
  variant: 'p',
};

export default Typography;
