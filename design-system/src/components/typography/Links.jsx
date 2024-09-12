// src/components/typography/Links.jsx
import PropTypes from 'prop-types';

/**
 * Links component for displaying hyperlinks with different styles and states.
 */
export const Links = ({ href, children, className, ...props }) => {
  const baseStyle = 'text-blue-500 hover:text-blue-700 underline';

  return (
    <a href={href} className={`${baseStyle} ${className}`} {...props}>
      {children}
    </a>
  );
};

Links.propTypes = {
  /**
   * URL that the link points to
   */
  href: PropTypes.string.isRequired,
  /**
   * Content to display inside the link
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

Links.defaultProps = {
  className: '',
};

export default Links;
