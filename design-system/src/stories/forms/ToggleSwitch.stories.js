import { ToggleSwitch } from "../../components/forms/ToggleSwitch";
import { fn } from "@storybook/test";

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
  args: {
    onChange: fn(), // Action to handle the toggle switch in Storybook
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
