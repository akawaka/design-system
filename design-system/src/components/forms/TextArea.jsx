// src/components/forms/TextArea.jsx
import PropTypes from 'prop-types';

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
  resizable: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  resizable: true,
  placeholder: 'Enter text...',
  className: '',
};

export default TextArea;
