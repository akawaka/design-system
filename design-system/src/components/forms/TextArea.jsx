// src/components/forms/TextArea.jsx
import PropTypes from 'prop-types';

/**
 * TextArea component for standard and resizable text areas.
 */
export const TextArea = ({ resizable, placeholder, className, ...props }) => {
  const baseStyle = 'border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300';
  const resizableStyle = resizable ? 'resize' : 'resize-none';

  return (
    <textarea
      className={`${baseStyle} ${resizableStyle} ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

TextArea.propTypes = {
  /**
   * Determines if the textarea is resizable
   */
  resizable: PropTypes.bool,
  /**
   * Placeholder text for the textarea
   */
  placeholder: PropTypes.string,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

TextArea.defaultProps = {
  resizable: true,
  placeholder: 'Enter text...',
  className: '',
};

export default TextArea;
