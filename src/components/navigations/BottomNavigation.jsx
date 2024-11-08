import PropTypes from "prop-types";
import Button from "../buttons/Button";

export const BottomNavigation = ({ items }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-screen bg-white border-t shadow-md border-stone-300">
      <ul className="flex justify-around divide-x divide-stone-300">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col items-center w-full">
            <Button
              variant="icon"
              onClick={item.onClick}
              className="w-full py-4 group"
            >
              <item.icon className="w-6 h-6 transition duration-300 ease-out text-stone-900 group-hover:text-stone-700 group-focus:text-stone-900" />
            </Button>
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
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default BottomNavigation;
