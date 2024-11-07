import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState, useEffect, useCallback } from "react";
import { ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, CheckCircleIcon } from '@heroicons/react/16/solid';
import { Button } from "../buttons/Button";

export const Alert = ({
  type,
  title,
  description,
  listItems,
  dismissible,
  onDismiss,
  actions,
  autoDismissTime,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true); // new state for controlling unmounting
  const [progress, setProgress] = useState(100);

  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setShouldRender(false); // delay unmounting until animation completes
      if (onDismiss) onDismiss();
    }, 500); // delay here should match CSS transition duration
  }, [onDismiss]);

  useEffect(() => {
    setIsVisible(true);
    if (autoDismissTime) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress <= 0) {
            clearInterval(interval);
            handleDismiss();
            return 0;
          }
          return prevProgress - (100 / (autoDismissTime / 100));
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [autoDismissTime, handleDismiss]);

  if (!shouldRender) return null;

  const alertStyles = {
    success: "bg-green-200 text-green-500 border-green-500",
    error: "bg-red-200 text-red-600 border-red-600",
    warning: "bg-yellow-100 text-yellow-500 border-yellow-500",
    info: "bg-blue-50 text-blue-500 border-blue-500",
  };

  const iconStyles = {
    success: "text-green-500",
    error: "text-red-600",
    warning: "text-yellow-500",
    info: "text-blue-500",
  };

  const progressBarStyles = {
    success: "bg-green-500",
    error: "bg-red-600",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  const icons = {
    success: CheckCircleIcon,
    error: ExclamationCircleIcon,
    warning: ExclamationTriangleIcon,
    info: InformationCircleIcon,
  };

  const IconComponent = icons[type];

  return (
    <div className={`fixed z-50 top-8 transition-all duration-1000 ease-out ${isVisible ? 'transform translate-x-0 opacity-100 right-8' : 'transform translate-x-full right-0'}`}>
      <div className={`p-4 w-96 rounded-md ${alertStyles[type]} border relative overflow-hidden`}>
        {autoDismissTime && (
          <div
            className={`absolute top-0 left-0 h-1 ${progressBarStyles[type]} transition-all duration-100 ease-linear`}
            style={{ width: `${progress}%` }}
          />
        )}
        <div className="flex">
          <div className="flex-shrink-0">
            <IconComponent
              className={`w-5 h-5 ${iconStyles[type]}`}
              aria-hidden="true"
            />
          </div>
          <div className="flex-grow ml-3">
            <h3 className="text-sm font-medium">{title}</h3>

            {description && (
              <div className="mt-2 text-sm">
                <p>{description}</p>
              </div>
            )}

            {listItems && (
              <ul className="mt-2 text-sm list-disc list-inside">
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {actions && (
              <div className="flex mt-4 space-x-3">
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant="icon"
                    onClick={action.onClick}
                    className="text-blue-600 hover:text-blue-500"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {dismissible && (
            <div className="absolute top-0 right-0 p-2">
              <Button onClick={handleDismiss} variant="icon" className="bg-transparent">
                <XMarkIcon
                  className={`w-5 h-5 ${iconStyles[type]}`}
                  aria-hidden="true"
                />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning", "info"]).isRequired,
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
  autoDismissTime: PropTypes.number,
};
