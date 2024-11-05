import { Dropdown } from "../../components/dropdowns/Dropdown";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/20/solid";

export default {
  title: "Design System/Components/Dropdowns/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {},
};

const items = [
  { icon: HomeIcon, content: "Home" },
  { icon: UserIcon, content: "Profile" },
  { icon: CogIcon, content: "Settings" },
];

export const Default = {
  args: {
    items,
  },
};
