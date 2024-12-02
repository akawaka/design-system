import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import {
  XMarkIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Button } from "../buttons/Button";

const ICONS = {
  success: CheckCircleIcon,
  error: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InformationCircleIcon,
};

const STYLES = {
  alert: {
    success: "bg-green-100 text-green-800 border-green-500",
    error: "bg-red-100 text-red-800 border-red-600",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-500",
    info: "bg-blue-50 text-blue-800 border-blue-500",
  },
  icon: {
    success: "text-green-800",
    error: "text-red-800",
    warning: "text-yellow-800",
    info: "text-blue-800",
  },
  progressBar: {
    success: "bg-green-500",
    error: "bg-red-600",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  },
};

export const Alert = ({
  type = "info",
  title,
  description,
  listItems,
  dismissible = true,
  onDismiss,
  actions,
  autoDismissTime,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  }, [onDismiss]);

  useEffect(() => {
    setIsVisible(true);

    if (autoDismissTime) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev - 100 / (autoDismissTime / 100);
          if (next <= 0) {
            clearInterval(interval);
            handleDismiss();
            return 0;
          }
          return next;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [autoDismissTime, handleDismiss]);

  const Icon = ICONS[type];

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={clsx(
        "fixed z-50 top-8 transition-all duration-500 ease-out",
        isVisible
          ? "transform translate-x-0 opacity-100 right-8"
          : "transform translate-x-full right-0"
      )}
    >
      <div
        className={clsx(
          "p-4 w-96 rounded-md border relative overflow-hidden",
          STYLES.alert[type]
        )}
      >
        {autoDismissTime && (
          <div
            className={clsx(
              "absolute top-0 left-0 h-1 transition-all duration-100 ease-linear",
              STYLES.progressBar[type]
            )}
            style={{ width: `${progress}%` }}
          />
        )}
        <div className="flex">
          <Icon className={clsx("w-5 h-5 flex-shrink-0", STYLES.icon[type])} />
          <div className="flex-grow ml-3">
            <h3 className="text-sm font-medium">{title}</h3>
            {description && <p className="mt-2 text-sm">{description}</p>}
            {listItems?.length > 0 && (
              <ul className="mt-2 text-sm list-disc list-inside">
                {listItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            {actions?.length > 0 && (
              <div className="flex mt-4 space-x-3">
                {actions.map((action, idx) => (
                  <Button
                    key={idx}
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
            <Button
              onClick={handleDismiss}
              variant="icon"
              className="absolute top-0 right-0 p-2 bg-transparent"
            >
              <XMarkIcon className={clsx("w-5 h-5", STYLES.icon[type])} />
            </Button>
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
