import PropTypes from "prop-types";

const Link = ({ href, label }) => {
  return (
    <a
      href={href}
      className={`transition duration-300 ease-out focus:outline-none border-b border-transparent hover:border-stone-500 hover:text-stone-700 text-stone-900`}
    >
      {label}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Link;
