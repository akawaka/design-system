import { Banner } from "../../components/banners/Banner";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { fn } from "@storybook/test";

export default {
  title: "Design System/Components/Banners/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "text" },
    titleColor: { control: "text" },
    linkColor: { control: "text" },
    iconColor: { control: "text" },
    dismissIconColor: { control: "text" },
  },
  args: { onDismiss: fn() },
};

export const Default = {
  args: {
    title: "This is a banner",
    backgroundColor: "bg-gray-100",
  },
};

export const WithIcon = {
  args: {
    title: "Banner with Icon",
    icon: InformationCircleIcon,
    backgroundColor: "bg-gray-100",
    iconColor: "text-blue-500",
  },
};

export const WithLink = {
  args: {
    title: "Banner with Link",
    linkText: "Learn more",
    linkUrl: "https://example.com",
    backgroundColor: "bg-gray-100",
    linkColor: "text-green-500",
  },
};

export const Dismissable = {
  args: {
    title: "Dismissable Banner",
    onDismiss: fn(),
    backgroundColor: "bg-gray-100",
    dismissIconColor: "text-red-500",
  },
};

export const Complete = {
  args: {
    title: "Complete Banner",
    icon: InformationCircleIcon,
    linkText: "Learn more",
    linkUrl: "https://example.com",
    onDismiss: fn(),
    backgroundColor: "bg-gray-100",
    titleColor: "text-gray-800",
    linkColor: "text-green-500",
    iconColor: "text-blue-500",
    dismissIconColor: "text-red-500",
  },
};
