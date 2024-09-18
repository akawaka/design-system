import PropTypes from 'prop-types';

/**
 * Input field component for user input
 */
export const Input = ({
  size,
  placeholder,
  value,
  onChange,
  label,
  helpText,
  error,
  disabled,
  hiddenLabel,
  cornerHint,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  overlappingLabel,
  ...props
}) => {
  const baseStyle = `border rounded-md focus:outline-none focus:ring-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  const sizeStyle = size === 'large' ? 'p-3 text-lg' : size === 'small' ? 'p-1 text-sm' : 'p-2';
  const errorStyle = error ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300';

  return (
    <div className={`flex flex-col items-start justify-start space-y-2`}>
      <div className="flex items-center justify-between w-full">
        {label && !hiddenLabel && !overlappingLabel && <label className="mb-1 text-sm font-medium">{label}</label>}
        {cornerHint && <span className="text-sm text-gray-500">{cornerHint}</span>}
      </div>

      <div className="relative">
        {LeadingIcon && <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{<LeadingIcon />}</span>}
        {overlappingLabel && <label className="absolute inline-block px-1 text-xs bg-black -top-2 left-2">{overlappingLabel}</label>}

        <input
          type="text"
          className={`${baseStyle} ${sizeStyle} ${errorStyle} ${LeadingIcon ? 'pl-10' : ''} ${TrailingIcon ? 'pr-10' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={error ? 'true' : undefined}
          {...props}
        />

        {TrailingIcon && <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">{<TrailingIcon />}</span>}
      </div>

      {helpText && <p className="mt-1 text-sm text-gray-500">{helpText}</p>}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Placeholder text for the input field
   */
  placeholder: PropTypes.string,
  /**
   * Value of the input field
   */
  value: PropTypes.string,
  /**
   * Optional change handler
   */
  onChange: PropTypes.func,
  /**
   * Input label
   */
  label: PropTypes.string,
  /**
   * Help text below the input field
   */
  helpText: PropTypes.string,
  /**
   * Validation error message
   */
  error: PropTypes.string,
  /**
   * Disabled state
   */
  disabled: PropTypes.bool,
  /**
   * Hidden label for accessibility
   */
  hiddenLabel: PropTypes.bool,
  /**
   * Hint text displayed in the corner of the input
   */
  cornerHint: PropTypes.string,
  /**
   * Leading icon component
   */
  leadingIcon: PropTypes.elementType,
  /**
   * Trailing icon component
   */
  trailingIcon: PropTypes.elementType,
  /**
   * Inset label inside the input
   */
  insetLabel: PropTypes.string,
  /**
   * Overlapping label that floats above the input
   */
  overlappingLabel: PropTypes.string,
};

Input.defaultProps = {
  size: 'medium',
  placeholder: 'Enter text...',
  value: '',
  onChange: undefined,
  label: null,
  helpText: null,
  error: null,
  disabled: false,
  hiddenLabel: false,
  cornerHint: null,
  leadingIcon: null,
  trailingIcon: null,
  insetLabel: null,
  overlappingLabel: null,
};

export default Input;
