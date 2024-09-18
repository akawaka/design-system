// src/components/forms/CheckboxRadio.jsx
import PropTypes from "prop-types";

/**
 * CheckboxRadio component for checkboxes and radio buttons with different states.
 */
export const CheckboxRadio = ({
  type,
  label,
  checked,
  disabled,
  id,
  text,
  ...props
}) => {
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <fieldset>
      <legend className="sr-only">Notifications</legend>
      <div className="space-y-5">
        <div className="relative flex items-start">
          <div className="flex items-center h-6">
            <input
              checked={checked}
              id={id}
              name={id}
              type={type}
              disabled={disabled}
              className={`${disabledStyle} w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600`}
              {...props}
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor={id} className="font-medium text-gray-900">
              {label}
            </label>
            <p className="text-gray-500">
              {text}
            </p>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

CheckboxRadio.propTypes = {
  /**
   * The type of input (checkbox or radio)
   */
  type: PropTypes.oneOf(["checkbox", "radio"]).isRequired,
  /**
   * Label for the input
   */
  label: PropTypes.string.isRequired,
  /**
   * id for the input
   */
  id: PropTypes.string.isRequired,
  /**
   * text for the input
   */
  text: PropTypes.string.isRequired,
  /**
   * Whether the input is checked
   */
  checked: PropTypes.bool,
  /**
   * Whether the input is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

CheckboxRadio.defaultProps = {
  checked: false,
  disabled: false,
  className: "",
};

export default CheckboxRadio;
