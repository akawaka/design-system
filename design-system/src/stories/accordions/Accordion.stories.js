import Accordion from "../../components/accordions/Accordion";

export default {
  title: "Design System/Components/Accordions/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    children: {
      control: "text",
    },
    initialOpen: {
      control: "boolean",
    },
  },
};

export const DefaultAccordion = {
  args: {
    title: "Accordion Title",
    children: "This is the content of the accordion.",
    initialOpen: false,
  },
};

export const InitiallyOpenAccordion = {
  args: {
    title: "Accordion Title",
    children: "This accordion starts open.",
    initialOpen: true,
  },
};
