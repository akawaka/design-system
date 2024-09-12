// src/components/typography/Headlines.jsx
import PropTypes from 'prop-types';

/**
 * Headlines component for displaying various levels of headers (h1 to h6).
 */
export const Headlines = ({ variant, children, ...props }) => {
  // Define base styles and variant-specific styles for headlines
  const baseStyle = 'font-sans';
  const variantStyle = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    h4: 'text-xl font-normal',
    h5: 'text-lg font-light',
    h6: 'text-base font-thin',
  };

  // Use the variant prop to determine the HTML tag and styles
  const Tag = variant;

  return (
    <Tag className={`${baseStyle} ${variantStyle[variant]}`} {...props}>
      {children}
    </Tag>
  );
};

Headlines.propTypes = {
  /**
   * The headline variant to render (h1, h2, h3, etc.)
   */
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  /**
   * Content to display inside the Headlines component
   */
  children: PropTypes.node.isRequired,
};

export default Headlines;
