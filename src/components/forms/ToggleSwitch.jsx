import PropTypes from 'prop-types';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

export const ToggleSwitch = ({ checked: checkedProp, disabled, onChange, className, ...props }) => {
  const [checked, setChecked] = useState(checkedProp);

  const handleToggle = (value) => {
    setChecked(value);
    if (onChange) onChange(value);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleToggle}
      disabled={disabled}
      className={`group relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
        checked ? 'bg-indigo-600' : 'bg-gray-300'
      } ${disabled ? 'opacity-50 cursor-not-allowed hover:border-transparent' : 'cursor-pointer'} ${className}`}
      {...props}
    >
      <span className="sr-only">Toggle setting</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none flex-shrink-0 top-1/2 absolute h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? 'translate-x-0 -translate-y-1/2' : '-translate-x-full -translate-y-1/2'
        }`}
      />
    </Switch>
  );
};

ToggleSwitch.propTypes = {

  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

ToggleSwitch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: undefined,
  className: '',
};

export default ToggleSwitch;
