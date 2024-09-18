// src/components/typography/Headlines.jsx
import PropTypes from 'prop-types';

/**
 * Headlines component for displaying various levels of headers (h1 to h6).
 */
export const Headlines = ({ variant, children, ...props }) => {
  const baseStyle = 'font-sans';
  const variantStyle = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    h4: 'text-xl font-normal',
    h5: 'text-lg font-light',
    h6: 'text-base font-thin',
  };

  const Tag = variant;

  return (
    <Tag className={`${baseStyle} ${variantStyle[variant]}`} {...props}>
      {children}
    </Tag>
  );
};

Headlines.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Headlines;
