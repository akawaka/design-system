// src/stories/forms/SelectDropdown.stories.js
import { SelectDropdown } from "../../components/forms/SelectDropdown";

export default {
  title: "Design System/Components/Forms/SelectDropdown",
  component: SelectDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    multiple: {
      control: "boolean",
      description: "Whether the dropdown is single or multi-select",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the dropdown",
    },
    options: { control: "object", description: "Options for the dropdown" },
  },
};

export const SingleSelect = {
  args: {
    multiple: false,
    placeholder: "Select an option",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
};

export const MultiSelect = {
  args: {
    multiple: true,
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
};
