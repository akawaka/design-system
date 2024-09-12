// src/components/forms/ToggleSwitch.jsx
import PropTypes from 'prop-types';

/**
 * ToggleSwitch component for on/off switches.
 */
export const ToggleSwitch = ({ checked, disabled, className, ...props }) => {
  const baseStyle = 'relative inline-flex items-center h-6 rounded-full w-11';
  const checkedStyle = checked ? 'bg-blue-600' : 'bg-gray-300';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <label className={`${baseStyle} ${checkedStyle} ${disabledStyle} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className="sr-only"
        {...props}
      />
      <span className="w-6 h-6 transform bg-white rounded-full shadow transition-transform duration-200 ease-in-out"></span>
    </label>
  );
};

ToggleSwitch.propTypes = {
  /**
   * Whether the switch is checked (on)
   */
  checked: PropTypes.bool,
  /**
   * Whether the switch is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

ToggleSwitch.defaultProps = {
  checked: false,
  disabled: false,
  className: '',
};

export default ToggleSwitch;
