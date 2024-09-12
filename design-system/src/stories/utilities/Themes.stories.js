// src/stories/utilities/Themes.stories.js
import { Themes } from "../../components/utilities/Themes";

export default {
  title: "Design System/Utilities/Themes",
  component: Themes,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark", "highContrast"],
      description: "Theme type",
    },
    children: { control: "text", description: "Content to display" },
  },
};

export const LightTheme = {
  args: {
    theme: "light",
    children: "Light Theme Example",
  },
};

export const DarkTheme = {
  args: {
    theme: "dark",
    children: "Dark Theme Example",
  },
};

export const HighContrastTheme = {
  args: {
    theme: "highContrast",
    children: "High Contrast Theme Example",
  },
};
