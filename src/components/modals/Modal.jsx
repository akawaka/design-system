// src/components/modals/Modal.jsx
import PropTypes from "prop-types";
import Heading from "../typography/Heading";
import Card from "../cards/Card";
import Button from "../buttons/Button";
import { XMarkIcon } from "@heroicons/react/20/solid";

export const Modal = ({
  title,
  onClose,
  children = null,
  ...props
}) => {
  return (
    <>
      <div
        className="fixed inset-0 z-30 bg-stone-900 bg-opacity-80"
        {...props}
        onClick={onClose}
      ></div>
      <div className="absolute z-40 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl left-1/2 top-1/2">
        <div className="relative flex items-center justify-center w-full overflow-auto">
          <Card>
            <div className="w-full h-full">
              <Heading level={2}>{title}</Heading>
              {children}
            </div>
            <Button
              variant="icon"
              onClick={onClose}
              className="absolute top-2 right-2 group"
            >
              <XMarkIcon
                className="transition duration-300 ease-out text-slate-700 w-7 h-7 group-hover:text-slate-600"
                aria-hidden="true"
              />
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
