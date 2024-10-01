import { Breadcrumbs } from "../../components/navigations/Breadcrumbs";
import { fn } from "@storybook/test";

export default {
  title: "Design System/Components/Navigations/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

const items = [
  { label: "Home", onClick: fn() },
  { label: "Documents", onClick: fn() },
  { label: "File", onClick: fn() },
];

export const LabelsOnly = {
  args: {
    items,
  },
};
