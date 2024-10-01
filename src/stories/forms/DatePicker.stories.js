// src/stories/forms/DatePicker.stories.js
import { DatePicker } from "../../components/forms/DatePicker";

export default {
  title: "Design System/Components/Forms/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text", description: "Current value of the date picker" },
    onChange: {
      action: "onChange",
      description: "Function to handle date change",
    },
  },
};

export const StandardDatePicker = {
  args: {
    value: "",
  },
};
