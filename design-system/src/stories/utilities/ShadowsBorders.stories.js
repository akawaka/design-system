// src/stories/utilities/ShadowsBorders.stories.js
import { ShadowsBorders } from "../../components/utilities/ShadowsBorders";

export default {
  title: "Design System/Utilities/ShadowsBorders",
  component: ShadowsBorders,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    shadow: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl"],
      description: "Shadow depth",
    },
    border: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Border size",
    },
    children: { control: "text", description: "Content to display" },
  },
};

export const MediumShadowMediumBorder = {
  args: {
    shadow: "md",
    border: "md",
    children: "Medium Shadow and Medium Border",
  },
};

export const LargeShadowNoBorder = {
  args: {
    shadow: "lg",
    border: "",
    children: "Large Shadow with No Border",
  },
};
