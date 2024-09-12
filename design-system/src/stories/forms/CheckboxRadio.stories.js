// src/stories/forms/CheckboxRadio.stories.js
import { CheckboxRadio } from "../../components/forms/CheckboxRadio";

export default {
  title: "Design System/Forms/CheckboxRadio",
  component: CheckboxRadio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["checkbox", "radio"],
      description: "Type of input",
    },
    label: { control: "text", description: "Label for the input" },
    checked: {
      control: "boolean",
      description: "Whether the input is checked",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
  },
};

export const Checkbox = {
  args: {
    type: "checkbox",
    label: "Check me",
    checked: false,
    disabled: false,
  },
};

export const RadioButton = {
  args: {
    type: "radio",
    label: "Select me",
    checked: false,
    disabled: false,
  },
};