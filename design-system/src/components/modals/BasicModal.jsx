// src/components/modals/BasicModal.jsx
import PropTypes from 'prop-types';

/**
 * BasicModal component for displaying a modal with title, content, and a close button.
 */
export const BasicModal = ({ title, content, onClose, className, ...props }) => {
  const baseStyle = 'fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center text-black';
  const modalStyle = 'bg-white p-6 rounded-lg shadow-lg max-w-lg w-full';
  const buttonStyle = 'mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300';

  // Explicitly declare Tailwind classes to ensure they are included
  const allClasses = [
    'fixed', 'inset-0', 'bg-gray-800', 'bg-opacity-75', 'flex', 'items-center', 'justify-center',
    'bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'max-w-lg', 'w-full',
    'mt-4', 'bg-blue-500', 'text-white', 'py-2', 'px-4', 'rounded', 'hover:bg-blue-600',
    'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-300'
  ];

  return (
    <div className={`${baseStyle} ${className}`} {...props}>
      <div className={modalStyle}>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-4">{content}</p>
        <button className={buttonStyle} onClick={onClose}>
          Close
        </button>
      </div>
      {/* This comment ensures Tailwind picks up the following classes: */}
      {/* ${allClasses.join(' ')} */}
    </div>
  );
};

BasicModal.propTypes = {
  /**
   * Title of the modal
   */
  title: PropTypes.string.isRequired,
  /**
   * Content of the modal
   */
  content: PropTypes.string.isRequired,
  /**
   * Function to handle the close button action
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

BasicModal.defaultProps = {
  className: '',
};

export default BasicModal;
