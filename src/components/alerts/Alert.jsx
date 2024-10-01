import PropTypes from 'prop-types';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/20/solid';


export const Alert = ({ type, title, description, listItems, dismissible, onDismiss, actions }) => {
  const alertStyles = {
    success: 'bg-green-50 text-green-700 border-green-300',
    error: 'bg-red-50 text-red-700 border-red-300',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-300',
    info: 'bg-blue-50 text-blue-700 border-blue-300',
  };

  const iconStyles = {
    success: 'text-green-400',
    error: 'text-red-400',
    warning: 'text-yellow-400',
    info: 'text-blue-400',
  };

  const icons = {
    success: ExclamationTriangleIcon,
    error: ExclamationTriangleIcon,
    warning: ExclamationTriangleIcon,
    info: ExclamationTriangleIcon,
  };

  const IconComponent = icons[type];

  return (
    <div className={`p-4 rounded-md ${alertStyles[type]} border relative`}>
      <div className="flex ">
        <div className="flex-shrink-0">
          <IconComponent className={`w-5 h-5 ${iconStyles[type]}`} aria-hidden="true" />
        </div>
        <div className="flex-grow ml-3">
          <h3 className="text-sm font-medium">{title}</h3>

          {/* Alert with description */}
          {description && (
            <div className="mt-2 text-sm">
              <p>{description}</p>
            </div>
          )}

          {/* Alert with list */}
          {listItems && (
            <ul className="mt-2 text-sm list-disc list-inside">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {/* Alert with actions */}
          {actions && (
            <div className="flex mt-4 space-x-3">
              {actions.map((action, index) => (
                <button
                  key={index}
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  onClick={action.onClick}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dismiss button */}
        {dismissible && (
          <div className="absolute top-0 right-0 p-2">
            <button
              onClick={onDismiss}
              className="bg-transparent"
            >
              <XMarkIcon className={`w-5 h-5 ${iconStyles[type]}`} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.string),
  dismissible: PropTypes.bool,
  onDismiss: PropTypes.func,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ),
};

Alert.defaultProps = {
  dismissible: false,
  onDismiss: () => {},
  description: '',
  listItems: null,
  actions: null,
};

export default Alert;
