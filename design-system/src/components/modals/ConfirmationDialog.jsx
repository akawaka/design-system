// src/components/modals/ConfirmationDialog.jsx
import PropTypes from 'prop-types';

export const ConfirmationDialog = ({ message, onClose, className, ...props }) => {
  const baseStyle = 'fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center text-black';
  const dialogStyle = 'bg-white p-6 rounded-lg shadow-lg max-w-md w-full';
  const buttonStyle = 'mt-4 py-2 px-4 rounded focus:outline-none focus:ring-2';

  const confirmButtonStyle = 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-300';
  const cancelButtonStyle = 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300';

  // Explicitly declare Tailwind classes to ensure they are included
  const allClasses = [
    'fixed', 'inset-0', 'bg-gray-800', 'bg-opacity-75', 'flex', 'items-center', 'justify-center',
    'bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'max-w-md', 'w-full',
    'mt-4', 'py-2', 'px-4', 'rounded', 'focus:outline-none', 'focus:ring-2',
    'bg-green-500', 'text-white', 'hover:bg-green-600', 'focus:ring-green-300',
    'bg-red-500', 'hover:bg-red-600', 'focus:ring-red-300'
  ];

  return (
    <div className={`${baseStyle} ${className}`} {...props}>
      <div className={dialogStyle}>
        <p>{message}</p>
        <div className="flex justify-end space-x-4">
          <button className={`${buttonStyle} ${confirmButtonStyle}`} onClick={onClose}>
            Yes
          </button>
          <button className={`${buttonStyle} ${cancelButtonStyle}`} onClick={onClose}>
            No
          </button>
        </div>
      </div>
      {/* This comment ensures Tailwind picks up the following classes: */}
      {/* ${allClasses.join(' ')} */}
    </div>
  );
};

ConfirmationDialog.propTypes = {

  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ConfirmationDialog.defaultProps = {
  className: '',
};

export default ConfirmationDialog;
