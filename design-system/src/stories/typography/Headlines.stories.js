// src/stories/typography/Headlines.stories.js
import { Headlines } from "../../components/typography/Headlines";

export default {
  title: "Design System/Components/Typography/Headlines",
  component: Headlines,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Headline variant to render",
    },
    children: { control: "text", description: "Content to display" },
  },
};

export const Headline1 = {
  args: {
    variant: "h1",
    children: "Headline 1",
  },
};

export const Headline2 = {
  args: {
    variant: "h2",
    children: "Headline 2",
  },
};

export const Headline3 = {
  args: {
    variant: "h3",
    children: "Headline 3",
  },
};

export const Headline4 = {
  args: {
    variant: "h4",
    children: "Headline 4",
  },
};

export const Headline5 = {
  args: {
    variant: "h5",
    children: "Headline 5",
  },
};

export const Headline6 = {
  args: {
    variant: "h6",
    children: "Headline 6",
  },
};
