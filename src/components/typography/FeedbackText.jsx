import PropTypes from 'prop-types';
import { ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, CheckCircleIcon } from '@heroicons/react/16/solid';

/**
 * FeedbackText component for displaying alert, warning, info, and validation messages.
 */
export const FeedbackText = ({ type, children, className, ...props }) => {
  const typeStyle = {
    alert: 'text-red-600',
    warning: 'text-yellow-600 ',
    info: 'text-blue-500',
    validation: 'text-green-500',
  };

  const typeIcon = {
    alert: <ExclamationCircleIcon className="mr-2 size-4" />,
    warning: <ExclamationTriangleIcon className="mr-2 size-4" />,
    info: <InformationCircleIcon className="mr-2 size-4" />,
    validation: <CheckCircleIcon className="mr-2 size-4" />,
  };

  return (
    <span className={`flex items-center p-2 rounded ${typeStyle[type]} ${className}`} {...props}>
      {typeIcon[type]}
      {children}
    </span>
  );
};

FeedbackText.propTypes = {
  /**
   * The type of feedback message to render
   */
  type: PropTypes.oneOf(['alert', 'warning', 'info', 'validation']).isRequired,
  /**
   * Content to display inside the FeedbackText component
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

export default FeedbackText;
