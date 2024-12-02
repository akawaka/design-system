import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Heading from "../typography/Heading";

export function Accordion({ title, children, initialOpen }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    // Set content height on mount or when children change
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="px-6 py-2 border border-stone-300 rounded-xl">
      <div>
        <button
          onClick={toggleAccordion}
          className="flex items-center justify-between w-full py-4 focus:outline-none"
          aria-expanded={isOpen}
          aria-controls="accordion-content"
        >
          <Heading level={3}>{title}</Heading>
          <span
            className={clsx(
              "transform duration-300 ease-out transition-transform",
              { "rotate-180": isOpen }
            )}
          >
            <ChevronDownIcon className="w-6 h-6 text-stone-700" />
          </span>
        </button>
      </div>
      <div
        id="accordion-content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
        }}
        className="overflow-hidden duration-300 ease-out transition-max-height"
      >
        <div className="text-stone-700">{children}</div>
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
