// src/components/forms/CheckboxRadio.jsx
import PropTypes from 'prop-types';

/**
 * CheckboxRadio component for checkboxes and radio buttons with different states.
 */
export const CheckboxRadio = ({ type, label, checked, disabled, className, ...props }) => {
  const baseStyle = 'form-check-input';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <label className="inline-flex items-center">
      <input
        type={type}
        checked={checked}
        disabled={disabled}
        className={`${baseStyle} ${disabledStyle} ${className}`}
        {...props}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

CheckboxRadio.propTypes = {
  /**
   * The type of input (checkbox or radio)
   */
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  /**
   * Label for the input
   */
  label: PropTypes.string.isRequired,
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
  className: '',
};

export default CheckboxRadio;
