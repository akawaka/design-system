import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/solid";

export const Banner = ({
  icon: Icon,
  title,
  linkText,
  linkUrl,
  onDismiss,
  backgroundColor,
  titleColor,
  linkColor,
  iconColor,
  dismissIconColor,
  ...props
}) => {
  const baseStyle = `p-4 rounded-xl flex items-baseline space-x-4 justify-between ${backgroundColor}`;

  return (
    <div className={baseStyle} {...props}>
      <div className="flex items-center">
        {Icon && <Icon className={`mr-2 size-6 ${iconColor}`} />}
        {title && <h3 className={`text-lg font-medium ${titleColor}`}>{title}</h3>}
      </div>
      <div className="flex items-center space-x-4">
        {linkText && linkUrl && (
          <a href={linkUrl} className={`hover:underline ${linkColor}`}>
            {linkText}
          </a>
        )}
        {onDismiss && (
          <button onClick={onDismiss} className="focus:outline-none">
            <XMarkIcon className={`size-6 ${dismissIconColor}`} />
          </button>
        )}
      </div>
    </div>
  );
};

Banner.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  onDismiss: PropTypes.func,
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  linkColor: PropTypes.string,
  iconColor: PropTypes.string,
  dismissIconColor: PropTypes.string,
};

Banner.defaultProps = {
  icon: null,
  title: null,
  linkText: null,
  linkUrl: null,
  onDismiss: null,
  backgroundColor: "bg-gray-100",
  titleColor: "text-gray-800",
  linkColor: "text-blue-500",
  iconColor: "text-gray-600",
  dismissIconColor: "text-gray-600",
};

export default Banner;
