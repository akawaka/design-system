import { fn } from "@storybook/test";
import { Input } from "../../components/forms/Input";
import EnvelopeIcon from "../../components/icons/EnvelopeIcon.jsx";
import QuestionIcon from "../../components/icons/QuestionIcon.jsx";

export default {
  title: "Design System/Components/Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    leadingIcon: {
      control: { type: "none" },
    },
    trailingIcon: {
      control: { type: "none" },
    },
  },
  args: { onChange: fn() },
};

export const Default = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel = {
  args: {
    label: "Username",
    placeholder: "Enter your username...",
  },
};

export const WithLabelAndHelpText = {
  args: {
    label: "Email",
    helpText: "We'll never share your email with anyone else.",
    placeholder: "Enter your email...",
  },
};

export const WithValidationError = {
  args: {
    label: "Password",
    placeholder: "Enter your password...",
    error: "Password must be at least 8 characters.",
  },
};

export const Disabled = {
  args: {
    label: "Disabled Input",
    placeholder: "This field is disabled",
    disabled: true,
  },
};

export const WithHiddenLabel = {
  args: {
    label: "Hidden Label",
    placeholder: "Enter something...",
    hiddenLabel: true,
  },
};

export const WithCornerHint = {
  args: {
    label: "Username",
    cornerHint: "Optional",
    placeholder: "Enter your username...",
  },
};

export const WithLeadingIcon = {
  args: {
    label: "Search",
    placeholder: "Search...",
    leadingIcon: EnvelopeIcon,
  },
};

export const WithTrailingIcon = {
  args: {
    label: "Username",
    placeholder: "Enter your username...",
    trailingIcon: QuestionIcon,
  },
};

export const WithOverlappingLabel = {
  args: {
    label: "Full Name",
    overlappingLabel: "Enter your full name",
    placeholder: "John Doe",
  },
};
