import PropTypes from 'prop-types';

const BadgeVariants = {
  withBorder: {
    className: 'inline-flex uppercase items-center rounded-md bg-stone-300 px-2 py-1 text-sm font-semibold text-stone-900 ring-1 ring-inset ring-stone-500/10',
  },
};

export const Badge = ({ variant, children, className, ...props }) => {
  const { className: variantClassName } = BadgeVariants[variant];

  return (
    <span
      className={`${variantClassName} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['withBorder']),
};

export default Badge;
