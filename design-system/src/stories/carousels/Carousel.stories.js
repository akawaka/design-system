import { Carousel } from "../../components/carousel/Carousel";

export default {
  title: "Design System/Components/Carousels/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    loop: { control: "boolean" },
  },
  args: {
    loop: true,
  },
};

const images = [
  "https://via.placeholder.com/600x400?text=Slide+1",
  "https://via.placeholder.com/600x400?text=Slide+2",
  "https://via.placeholder.com/600x400?text=Slide+3",
];

export const Default = {
  args: {
    images,
    loop: true,
  },
};

export const NoLoop = {
  args: {
    images,
    loop: false,
  },
};
