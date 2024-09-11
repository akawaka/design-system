// src/stories/Input.stories.js
import { fn } from "@storybook/test";
import { Input } from "../../components/forms/Input";

// Default export to define metadata for the story
export default {
  title: "Design System/Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    placeholder: { control: "text" },
    value: { control: "text" },
  },
  args: { onChange: fn() }, // Use `fn` to simulate change handler for input
};

// Individual stories for different input variants
export const Small = {
  args: {
    size: "small",
    placeholder: "Small input",
    value: "",
  },
};

export const Medium = {
  args: {
    size: "medium",
    placeholder: "Medium input",
    value: "",
  },
};

export const Large = {
  args: {
    size: "large",
    placeholder: "Large input",
    value: "",
  },
};

export const Filled = {
  args: {
    size: "medium",
    placeholder: "Filled input",
    value: "Sample text",
  },
};
