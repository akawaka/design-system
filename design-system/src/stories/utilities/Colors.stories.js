// src/stories/utilities/Colors.stories.js
import { Colors } from "../../components/utilities/Colors";

export default {
  title: "Design System/Utilities/Colors",
  component: Colors,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "Color type",
    },
    children: { control: "text", description: "Content to display" },
  },
};

export const Primary = {
  args: {
    color: "primary",
    children: "Primary Color",
  },
};

export const Secondary = {
  args: {
    color: "secondary",
    children: "Secondary Color",
  },
};

export const Tertiary = {
  args: {
    color: "tertiary",
    children: "Tertiary Color",
  },
};
