import { Drawer } from "../../components/drawers/Drawer";

export default {
  title: "Design System/Components/Drawers/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    position: {
      control: {
        type: "radio",
        options: ["left", "right"],
      },
    },
  },
};

export const Default = {
  args: {
    title: "Drawer Title",
    content: "This is the drawer content. You can customize this text.",
    position: "left",
  },
};

export const RightDrawer = {
  args: {
    title: "Right-Side Drawer",
    content: "This drawer opens from the right.",
    position: "right",
  },
};
