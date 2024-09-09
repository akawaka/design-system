// src/stories/Typography.stories.js
import { Typography } from "./Typography"; // Adjust the import path as necessary

// Default export to define metadata for the story
export default {
  title: "Design System/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: { control: "text", description: "HTML tag to render" },
    children: { control: "text", description: "Content to display" },
    className: {
      control: "text",
      description: "TailwindCSS classes for styling",
    },
  },
};

// Individual stories for each headline variant
export const Headline1 = {
  args: {
    as: "h1",
    children: "Headline 1",
    className: "text-4xl font-bold",
  },
};

export const Headline2 = {
  args: {
    as: "h2",
    children: "Headline 2",
    className: "text-3xl font-semibold",
  },
};

export const Headline3 = {
  args: {
    as: "h3",
    children: "Headline 3",
    className: "text-2xl font-medium",
  },
};

export const Headline4 = {
  args: {
    as: "h4",
    children: "Headline 4",
    className: "text-xl font-normal",
  },
};

export const Headline5 = {
  args: {
    as: "h5",
    children: "Headline 5",
    className: "text-lg font-light",
  },
};

export const Headline6 = {
  args: {
    as: "h6",
    children: "Headline 6",
    className: "text-base font-thin",
  },
};
