// src/stories/typography/BodyText.stories.js
import { BodyText } from "../../components/typography/BodyText";

export default {
  title: "Design System/Typography/BodyText",
  component: BodyText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["paragraph", "blockquote", "small"],
      description: "Body text variant to render",
    },
    children: { control: "text", description: "Content to display" },
    className: {
      control: "text",
      description: "TailwindCSS classes for styling",
    },
  },
};

export const Paragraph = {
  args: {
    variant: "paragraph",
    children: "This is a standard paragraph.",
  },
};

export const Blockquote = {
  args: {
    variant: "blockquote",
    children: "This is a blockquote with some emphasized text.",
  },
};

export const SmallText = {
  args: {
    variant: "small",
    children: "This is small, less emphasized text.",
  },
};

export const LeadText = {
  args: {
    as: "p",
    children: "This is a lead paragraph with larger, lighter text.",
    className: "text-lg font-light text-gray-600",
  },
};
