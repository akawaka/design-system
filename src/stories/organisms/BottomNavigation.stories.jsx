import { BottomNavigation } from "../../components/navigations/BottomNavigation";
import { HomeIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const meta = {
  title: "Design System/Organisms/BottomNavigation",
  component: BottomNavigation,
  tags: ["autodocs"],
  argTypes: {
    items: { control: "array", description: "Array of navigation items" },
  },
};

export default meta;

const items = [
  { icon: HomeIcon, label: "Home", onClick: () => alert("Home clicked") },
  { icon: MagnifyingGlassIcon, label: "Search", onClick: () => alert("Search clicked") },
  { icon: UserCircleIcon, label: "Profile", onClick: () => alert("Profile clicked") },
];

export const DefaultBottomNavigation = () => (
  <BottomNavigation items={items} showLabels={false} />
);
