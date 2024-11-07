import { useState } from "react";
import { Modal } from "../../components/modals/Modal";
import { BodyText } from "../../components/typography/BodyText";
import { Button } from "../../components/buttons/Button";

const meta = {
  title: "Design System/Organisms/Modals",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Title of the modal" },
    content: { control: "text", description: "Content of the modal" },
    onClose: {
      action: "onClose",
      description: "Function to handle the close button action",
    },
  },
};

export default meta;

export const Default = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Open Modal
        </button>
      )}

      {isOpen && (
        <Modal
          title="Basic Modal"
          onClose={handleClose}
        >
          <div className="pt-4">
            <BodyText variant="paragraph">
              This is a basic modal with a close button.
            </BodyText>
          </div>
        </Modal>
      )}
    </div>
  );
};

export const ConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    console.log("Confirmed!");
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Open Confirmation Modal
        </button>
      )}

      {isOpen && (
        <Modal
          title="Confirm Action"
          onClose={handleClose}
        >
          <div className="pt-4">
            <BodyText variant="paragraph">
              Are you sure you want to proceed with this action?
            </BodyText>
            <div className="flex mt-12 space-x-4">
              <Button label="Cancel" onClick={handleClose} variant="secondary" />
              <Button label="Confirm" onClick={handleConfirm} variant="primary" />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
