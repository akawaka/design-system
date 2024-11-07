import { Breadcrumbs } from "../../components/navigations/Breadcrumbs";

const meta = {
  title: "Design System/Organisms/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Array of breadcrumb items",
    },
  },
};

export default meta;

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Category", href: "/category" },
  { label: "Subcategory", href: "/category/subcategory" },
  { label: "Item", href: "/category/subcategory/item" },
];

export const DefaultBreadcrumbs = () => {
  return <Breadcrumbs items={breadcrumbItems} />;
};

export const SingleBreadcrumb = () => {
  return <Breadcrumbs items={[{ label: "Home", href: "/" }]} />;
};

export const TwoBreadcrumbs = () => {
  return <Breadcrumbs items={[
    { label: "Home", href: "/" },
    { label: "Category", href: "/category" }
  ]} />;
};
