import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  size,
  label,
  backgroundColor,
  icon: Icon,
  iconPosition,
  ...props
}) => {
  const baseStyle =
    "font-medium rounded-xl focus:outline-none focus:ring-2 inline-flex items-center justify-center";
  const sizeStyle =
    size === "large"
      ? "py-3 px-6 text-lg"
      : size === "small"
      ? "py-1 px-3 text-sm"
      : "py-2 px-4";
  const primaryStyle = primary
    ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300 flex items-center"
    : "bg-green-500 text-gray-800 hover:bg-gray-300 focus:ring-gray-200 flex items-center";

  return (
    <button
      type="button"
      className={`${baseStyle} ${sizeStyle} ${primaryStyle}`}
      style={backgroundColor ? { backgroundColor } : {}}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <span className="mr-2">{<Icon />}</span>
      )}
      {label}
      {Icon && iconPosition === "right" && (
        <span className="ml-2">{<Icon />}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Icon element (optional)
   */
  icon: PropTypes.element,
  /**
   * Position of the icon, can be "left" or "right"
   */
  iconPosition: PropTypes.oneOf(["left", "right"]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  icon: null,
  iconPosition: "left",
  onClick: undefined,
};
