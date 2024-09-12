// src/stories/forms/ToggleSwitch.stories.js
import { ToggleSwitch } from "../../components/forms/ToggleSwitch";

export default {
  title: "Design System/Forms/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the switch is checked (on)",
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
    },
  },
};

export const On = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const Off = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
  },
};
