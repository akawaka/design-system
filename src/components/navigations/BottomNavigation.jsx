import PropTypes from "prop-types";

export const BottomNavigation = ({ items, showLabels }) => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-md">
      <ul className="flex justify-around py-2">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col items-center">
            <button
              type="button"
              className="flex flex-col items-center focus:outline-none group focus:text-blue-500"
              onClick={item.onClick}
            >
              <item.icon className="w-6 h-6 text-gray-700 transition duration-300 ease-out group-hover:text-blue-400 group-focus:text-blue-500" />
              {showLabels && <span className="mt-1 text-xs text-gray-700 transition duration-300 ease-out group-hover:text-blue-400 group-focus:text-blue-500">{item.label}</span>}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

BottomNavigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      label: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
  showLabels: PropTypes.bool,
};

BottomNavigation.defaultProps = {
  showLabels: false,
};

export default BottomNavigation;
