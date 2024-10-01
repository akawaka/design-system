// src/components/forms/SelectDropdown.jsx
import PropTypes from 'prop-types';

export const SelectDropdown = ({ options, multiple, placeholder, className, ...props }) => {
  const baseStyle = 'border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300';

  return (
    <select
      multiple={multiple}
      className={`${baseStyle} ${className}`}
      aria-label={placeholder}
      {...props}
    >
      {placeholder && !multiple && <option value="" disabled>{placeholder}</option>}
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

SelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  multiple: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

SelectDropdown.defaultProps = {
  multiple: false,
  placeholder: 'Select an option...',
  className: '',
};

export default SelectDropdown;
