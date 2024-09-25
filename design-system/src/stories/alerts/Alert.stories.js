import { fn } from "@storybook/test";
import Alert from "../../components/alerts/Alert";

export default {
  title: "Design System/Alerts/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["success", "error", "warning", "info"],
      },
    },
    dismissible: {
      control: "boolean",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    listItems: {
      control: "array",
    },
  },
  args: { onDismiss: fn() },
};

export const WithDescription = {
  args: {
    type: "info",
    title: "Informational Alert",
    description: "This is an informational alert with a description.",
    dismissible: false,
  },
};

export const WithList = {
  args: {
    type: "warning",
    title: "Warning Alert",
    listItems: [
      "First warning item",
      "Second warning item",
      "Third warning item",
    ],
    dismissible: false,
  },
};

export const WithActions = {
  args: {
    type: "success",
    title: "Success Alert",
    dismissible: false,
  },
};

export const WithDismissButton = {
  args: {
    type: "error",
    title: "Error Alert",
    description: "An error has occurred.",
    dismissible: true,
  },
};
