import PropTypes from "prop-types";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

const ButtonVariants = {
  primary: {
    className:
      "bg-stone-900 text-white font-semibold shadow hover:bg-stone-700 focus:ring-stone-900 py-2 px-4 rounded focus:outline-none focus:ring-2 transition ease-out duration-300 flex items-center justify-center",
  },
  secondary: {
    className:
      "text-stone-900 border font-semibold border-stone-900 bg-white rounded-md shadow hover:bg-stone-100 focus:ring-stone-900 py-2 px-4 rounded focus:outline-none focus:ring-2 transition ease-out duration-300 flex items-center justify-center",
  },
  tertiary: {
    className:
      "text-stone-900 font-semibold hover:text-stone-700 py-2 focus:ring-transparent flex items-center rounded focus:outline-none focus:ring-2 transition ease-out duration-300",
    withIcon: true,
  },
  icon: {
    className:
      "text-stone-700 hover:text-stone-500 focus:ring-transparent rounded-full p-2 focus:outline-none focus:ring-2 transition ease-out duration-300 flex items-center justify-center",
    iconOnly: true,
  },
};

export const Button = ({
  variant = "primary",
  onClick,
  label,
  children,
  ...props
}) => {
  const { className, withIcon, iconOnly } = ButtonVariants[variant] || {};

  return (
    <button
      className={className}
      onClick={onClick}
      aria-label={iconOnly && !label ? "button" : undefined}
      {...props}
    >
      {withIcon ? (
        <>
          {label}
          <ArrowLongRightIcon className="w-6 h-6 ml-2" />
        </>
      ) : (
        label || children
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "icon", "tertiary"]),
  children: PropTypes.node,
};

export default Button;
