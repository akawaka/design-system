import PropTypes from "prop-types";

export const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center p-4 space-x-2 text-gray-600 bg-gray-100">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <button
            type="button"
            className="transition duration-300 ease-out focus:outline-none hover:text-gray-700 hover:underline"
            onClick={item.onClick}
          >
            <span className="text-sm font-bold">{item.label}</span>
          </button>
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </div>
      ))}
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Breadcrumbs;
