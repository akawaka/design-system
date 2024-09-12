// src/components/typography/Lists.jsx
import PropTypes from 'prop-types';

/**
 * Lists component for displaying different types of lists (ordered, unordered, description).
 */
export const Lists = ({ variant, items, className, ...props }) => {
  const baseStyle = 'font-sans';
  const variantStyle = {
    unordered: 'list-disc pl-5',
    ordered: 'list-decimal pl-5',
    description: '',
  };

  const ListTag = variant === 'ordered' ? 'ol' : variant === 'unordered' ? 'ul' : 'dl';

  return (
    <ListTag className={`${baseStyle} ${variantStyle[variant]} ${className}`} {...props}>
      {items.map((item, index) =>
        variant === 'description' ? (
          <div key={index} className="mb-2">
            <dt className="font-semibold">{item.term}</dt>
            <dd className="ml-4">{item.description}</dd>
          </div>
        ) : (
          <li key={index}>{item}</li>
        )
      )}
    </ListTag>
  );
};

Lists.propTypes = {
  /**
   * The type of list to render
   */
  variant: PropTypes.oneOf(['unordered', 'ordered', 'description']).isRequired,
  /**
   * Items to display in the list
   */
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        term: PropTypes.string,
        description: PropTypes.string,
      }),
    ])
  ).isRequired,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

Lists.defaultProps = {
  className: '',
};

export default Lists;
