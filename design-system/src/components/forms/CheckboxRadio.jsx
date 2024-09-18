// src/components/forms/CheckboxRadio.jsx
import PropTypes from "prop-types";

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
  type: PropTypes.oneOf(["checkbox", "radio"]).isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

CheckboxRadio.defaultProps = {
  checked: false,
  disabled: false,
  className: "",
};

export default CheckboxRadio;
