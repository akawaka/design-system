// src/stories/utilities/Spacing.stories.js
import { Spacing } from "../../components/utilities/Spacing";

export default {
  title: "Design System/Utilities/Spacing",
  component: Spacing,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    margin: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      description: "Margin utility class",
    },
    padding: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      description: "Padding utility class",
    },
    alignment: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Text alignment",
    },
    children: { control: "text", description: "Content to display" },
  },
};

export const Default = {
  args: {
    margin: "3",
    padding: "3",
    alignment: "center",
    children: "Example with margin 3 and padding 3",
  },
};
