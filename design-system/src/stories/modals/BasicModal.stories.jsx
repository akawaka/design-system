import { useState } from "react";
import { BasicModal } from "../../components/modals/BasicModal";

export default {
  title: "Design System/Modals/BasicModal",
  component: BasicModal,
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

export const Default = (args) => {
  const [isOpen, setIsOpen] = useState(true); // State to control modal visibility

  const handleClose = () => {
    setIsOpen(false); // Close the modal
  };

  return (
    <div>
      {/* Button to reopen the modal */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Open Modal
        </button>
      )}

      {/* Render the modal if open */}
      {isOpen && <BasicModal {...args} onClose={handleClose} />}
    </div>
  );
};

// Default arguments for the modal
Default.args = {
  title: "Basic Modal",
  content: "This is a basic modal with a close button.",
};
