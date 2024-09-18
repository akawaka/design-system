// src/stories/modals/ConfirmationDialog.stories.js
import { ConfirmationDialog } from "../../components/modals/ConfirmationDialog";

export default {
  title: "Design System/Modals/ConfirmationDialog",
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

export const Default = {
  args: {
    message: "Are you sure you want to proceed?",
  },
};
