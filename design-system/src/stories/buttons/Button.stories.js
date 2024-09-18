import { fn } from "@storybook/test";
import { Button } from "../../components/buttons/Button";
import PlusIcon from '../../components/icons/PlusIcon.jsx';


export default {
  title: "Design System/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    iconPosition: {
      control: {
        type: "radio",
        options: ["left", "right"],
      },
    },
  },

  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: "Primary Button",
  },
};

export const Secondary = {
  args: {
    primary: false,
    label: "Secondary Button",
  },
};

export const Danger = {
  args: {
    primary: false,
    danger: true,
    label: "Danger Button",
  },
};

export const LeadingIcon = {
  args: {
    primary: true,
    label: "Left Icon Button",
    icon: PlusIcon,
    iconPosition: "left",
  },
};

export const TrailingIcon = {
  args: {
    primary: true,
    label: "Right Icon Button",
    icon: PlusIcon,
    iconPosition: "right",
  },
};

export const Large = {
  args: {
    primary: true,
    size: "large",
    label: "Large Button",
  },
};

export const Small = {
  args: {
    primary: true,
    size: "small",
    label: "Small Button",
  },
};
