// src/components/typography/BodyText.jsx
import PropTypes from 'prop-types';

/**
 * BodyText component for displaying paragraphs, blockquotes, and other body text elements.
 */
export const BodyText = ({ variant, children, className, ...props }) => {
  const baseStyle = 'font-sans';
  const variantStyle = {
    paragraph: 'text-base',
    blockquote: 'text-lg italic border-l-4 pl-4 border-gray-300',
    small: 'text-sm text-gray-600',
  };

  // Map the variant to the appropriate HTML tag
  const Tag = variant === 'blockquote' ? 'blockquote' : 'p';

  return (
    <Tag className={`${baseStyle} ${variantStyle[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

BodyText.propTypes = {
  /**
   * The type of body text to render
   */
  variant: PropTypes.oneOf(['paragraph', 'blockquote', 'small']).isRequired,
  /**
   * Content to display inside the BodyText component
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

BodyText.defaultProps = {
  className: '',
};

export default BodyText;
