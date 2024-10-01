import { useState, useRef } from "react";
import PropTypes from "prop-types";

export function Accordion({ title, children, initialOpen }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-6 py-2 border border-gray-300 rounded-xl">
      <div>
        <button
          onClick={toggleAccordion}
          className="flex items-center justify-between py-4 w-96 focus:outline-none"
        >
          <span className="text-lg font-medium text-gray-800">{title}</span>
          <span
            className={`transform duration-300 ease-out transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
        }}
        className={`overflow-hidden transition-max-height duration-300 ease-out`}
      >
        <div className="py-4 text-gray-600">{children}</div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  initialOpen: PropTypes.bool,
};

Accordion.defaultProps = {
  initialOpen: false,
};

export default Accordion;
