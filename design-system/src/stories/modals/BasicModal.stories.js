// src/stories/modals/BasicModal.stories.js
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

export const Default = {
  args: {
    title: "Basic Modal",
    content: "This is a basic modal with a close button.",
  },
};
