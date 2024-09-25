// src/components/utilities/Spacing.jsx
import PropTypes from 'prop-types';

/**
 * Spacing component for demonstrating margin, padding, and alignment helpers.
 * This version explicitly declares every Tailwind class used for spacing and alignment.
 */
export const Spacing = ({ margin, padding, alignment, children, className, ...props }) => {
  const baseStyle = 'border-2 border-gray-800'; // Base style to visualize spacing
  const marginStyle = margin ? `m-${margin}` : '';
  const paddingStyle = padding ? `p-${padding}` : '';
  const alignmentStyle = alignment ? `text-${alignment}` : '';

  // Explicitly declare Tailwind classes to ensure they are included
  const allClasses = [
    'm-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6', 'm-7', 'm-8', 'm-9', 'm-10',
    'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6', 'p-7', 'p-8', 'p-9', 'p-10',
    'text-left', 'text-center', 'text-right'
  ];

  return (
    <div className="bg-white flex">
      <div className={`${baseStyle} ${marginStyle} ${alignmentStyle} ${className}`} {...props}>
        <div className={`${paddingStyle} bg-green-500`}>
          { children }
        </div>
        {/* This comment ensures Tailwind picks up the following classes: */}
        {/* ${allClasses.join(' ')} */}
      </div>

    </div>
  );
};

Spacing.propTypes = {
  /**
   * Margin utility class (1-10)
   */
  margin: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']),
  /**
   * Padding utility class (1-10)
   */
  padding: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']),
  /**
   * Text alignment (left, center, right)
   */
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  /**
   * Content to display inside the Spacing component
   */
  children: PropTypes.node,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

Spacing.defaultProps = {
  margin: '1',
  padding: '1',
  alignment: 'left',
  children: 'Spacing Example',
  className: '',
};

export default Spacing;
