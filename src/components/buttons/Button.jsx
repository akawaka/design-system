import PropTypes from "prop-types";

export const Button = ({
  primary,
  danger,
  size,
  label,
  rounded,
  backgroundColor,
  icon: Icon,
  iconPosition,
  ...props
}) => {
  const baseStyle =
    "font-medium focus:outline-none focus:ring-2 flex items-center justify-center";

  const roundedFull =
    "rounded-full";

  const sizeStyle = {
    large: "py-4 px-6 text-lg",
    medium: "py-2 px-4",
    small: "py-1 px-3 text-sm",
  }[size];

  const buttonStyle = danger
    ? "bg-red-700 text-white hover:bg-red-500 focus:ring-red-300"
    : primary
    ? "bg-blue-700 text-white hover:bg-blue-500 focus:ring-blue-300"
    : "bg-green-700 text-white hover:bg-green-500 focus:ring-green-300";

  return (
    <button
      type="button"
      className={`${baseStyle} ${sizeStyle} ${buttonStyle} ${rounded ? roundedFull : 'rounded-xl'}`}
      style={backgroundColor ? { backgroundColor } : {}}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="mr-2 text-white size-6" />
      )}
      {label}
      {Icon && iconPosition === "right" && (
        <Icon className="ml-2 text-white size-6" />
      )}
      {Icon && !iconPosition && (
        <Icon className="text-white size-6" />
      )}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  rounded: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  danger: false,
  rounded: false,
  size: "medium",
  icon: null,
  iconPosition: null,
  onClick: undefined,
};

export default Button;
