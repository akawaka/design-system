// src/stories/typography/Lists.stories.js
import { Lists } from "../../components/typography/Lists";

export default {
  title: "Design System/Components/Typography/Lists",
  component: Lists,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["unordered", "ordered", "description"],
      description: "List variant to render",
    },
    items: { control: "object", description: "Items to display in the list" },
    className: {
      control: "text",
      description: "TailwindCSS classes for styling",
    },
  },
};

export const UnorderedList = {
  args: {
    variant: "unordered",
    items: ["Item 1", "Item 2", "Item 3"],
  },
};

export const OrderedList = {
  args: {
    variant: "ordered",
    items: ["First", "Second", "Third"],
  },
};

export const DescriptionList = {
  args: {
    variant: "description",
    items: [
      { term: "Term 1", description: "Description for term 1" },
      { term: "Term 2", description: "Description for term 2" },
    ],
  },
};
