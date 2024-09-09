import React from 'react';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // Define Tailwind classes for button size
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  };

  // Determine button style based on primary prop
  const modeClasses = primary
    ? 'bg-blue-500 text-white hover:bg-blue-600'
    : 'bg-gray-200 text-gray-700 hover:bg-gray-300';

  // Combine classes
  const buttonClasses = `rounded ${sizeClasses[size]} ${modeClasses}`;

  return (
    <button
      type="button"
      className={buttonClasses}
      style={{ backgroundColor }} // Inline style for custom background color
      {...props}
    >
      {label}
    </button>
  );
};
