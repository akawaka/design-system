import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button to open/close dropdown */}
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 text-white bg-blue-500 rounded"
      >
        Dropdown <ChevronDownIcon className="w-5 h-5 ml-2" />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute left-0 z-50 mt-2 bg-white rounded shadow-lg w-72">
          <ul className="py-2">
            {items.map((item, index) => (
              <button key={index} className="flex items-center px-4 py-2 hover:bg-gray-100">
                <item.icon className="w-5 h-5 mr-2 text-gray-500" />
                <span>{item.content}</span>
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Dropdown;
