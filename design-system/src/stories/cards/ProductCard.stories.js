// src/stories/ProductCard.stories.js
import { fn } from "@storybook/test";
import { ProductCard } from "../../components/cards/ProductCard";

// Default export to define metadata for the story
export default {
  title: "Design System/Components/Cards/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    price: { control: "text" },
  },
  args: { onAddToCart: fn() },
};

export const Default = {
  args: {
    image: "https://via.placeholder.com/300",
    title: "Sample Product",
    description: "This is a description of the sample product.",
    price: "$19.99",
  },
};
