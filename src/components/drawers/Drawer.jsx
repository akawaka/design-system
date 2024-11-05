import PropTypes from "prop-types";
import { useState } from "react";
import { XMarkIcon } from '@heroicons/react/20/solid';


export const Drawer = ({ title, content, position }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to open the drawer */}
      <button
        onClick={toggleDrawer}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Open Drawer
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeDrawer} // Close drawer on clicking backdrop
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 ${position === "right" ? "right-0" : "left-0"} w-96 h-screen bg-white shadow-lg z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : position === "right" ? "translate-x-full" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="mt-4">{content}</div>

          {/* Button to close the drawer */}
          <button
            onClick={closeDrawer}
            className="absolute p-2 text-white top-2 right-2 group"
          >
            <XMarkIcon className="text-gray-800 transition duration-300 ease-out w-7 h-7 group-hover:text-gray-600" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

Drawer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(["left", "right"]),
};

Drawer.defaultProps = {
  position: "left",
};

export default Drawer;
