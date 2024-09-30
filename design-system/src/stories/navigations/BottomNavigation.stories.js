import { BottomNavigation } from "../../components/navigations/BottomNavigation";
import { HomeIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/solid";
import { fn } from "@storybook/test";

export default {
  title: "Design System/Components/Navigations/BottomNavigation",
  component: BottomNavigation,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    showLabels: { control: "boolean" },
  },
  args: {
    showLabels: false,
  },
};

const items = [
  { icon: HomeIcon, label: "Home", onClick: fn() },
  { icon: MagnifyingGlassIcon, label: "Search", onClick: fn() },
  { icon: UserIcon, label: "Profile", onClick: fn() },
];

export const IconsOnly = {
  args: {
    items,
    showLabels: false,
  },
};

export const IconsWithLabels = {
  args: {
    items,
    showLabels: true,
  },
};
