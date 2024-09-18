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
        options: ["left", "right"], // Control for icon position
      },
    },
  },

  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const LeadingIcon = {
  args: {
    primary: true,
    label: "With Plus Icon",
    icon: PlusIcon,
    iconPosition: "left",
  },
};

export const TrailingIcon = {
  args: {
    primary: true,
    label: "With Plus Icon",
    icon: PlusIcon,
    iconPosition: "right",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
