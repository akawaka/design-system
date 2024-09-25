// src/stories/modals/ConfirmationDialog.stories.js
import { useState } from "react";
import { ConfirmationDialog } from "../../components/modals/ConfirmationDialog";

export default {
  title: "Design System/Components/Modals/ConfirmationDialog",
  component: ConfirmationDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: "text",
      description: "Message to display in the dialog",
    },
    onConfirm: {
      action: "onConfirm",
      description: "Function to handle the confirm action",
    },
    onCancel: {
      action: "onCancel",
      description: "Function to handle the cancel action",
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
      {isOpen && <ConfirmationDialog {...args} onClose={handleClose} />}
    </div>
  );
};

Default.args = {
  message: "Are you sure you wan't to delete this ?",
};
