// src/stories/typography/Links.stories.js
import { Links } from "../../components/typography/Links";

export default {
  title: "Design System/Typography/Links",
  component: Links,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text", description: "URL that the link points to" },
    children: { control: "text", description: "Content to display" },
    className: {
      control: "text",
      description: "TailwindCSS classes for styling",
    },
  },
};

export const DefaultLink = {
  args: {
    href: "#",
    children: "This is a link",
  },
};

export const StyledLink = {
  args: {
    href: "#",
    children: "This is a styled link",
    className: "text-red-500 hover:text-red-700",
  },
};
