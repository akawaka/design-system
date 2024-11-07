import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Heading from "../typography/Heading";

export function Accordion({ title, children, initialOpen }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-6 py-2 border border-stone-300 rounded-xl">
      <div>
        <button
          onClick={toggleAccordion}
          className="flex items-center justify-between py-4 w-96 focus:outline-none"
        >
          <Heading level={3}>{title}</Heading>
          <span
            className={`transform duration-300 ease-out transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDownIcon className="size-6 text-stone-700" />
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
        <div className="py-4 text-stone-700">{children}</div>
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
