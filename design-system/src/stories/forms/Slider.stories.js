// src/stories/forms/Slider.stories.js
import { Slider } from "../../components/forms/Slider";

export default {
  title: "Design System/Forms/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    min: { control: "number", description: "Minimum value of the slider" },
    max: { control: "number", description: "Maximum value of the slider" },
    step: { control: "number", description: "Step size for the slider" },
    value: { control: "number", description: "Current value of the slider" },
  },
};

export const RangeSlider = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
  },
};

export const DiscreteSteps = {
  args: {
    min: 0,
    max: 10,
    step: 1,
    value: 5,
  },
};
