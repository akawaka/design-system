// src/stories/forms/TextArea.stories.js
import { TextArea } from "../../components/forms/TextArea";

export default {
  title: "Design System/Components/Forms/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    resizable: {
      control: "boolean",
      description: "Determines if the textarea is resizable",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the textarea",
    },
  },
};

export const Standard = {
  args: {
    resizable: true,
    placeholder: "Standard resizable text area",
  },
};

export const NonResizable = {
  args: {
    resizable: false,
    placeholder: "Non-resizable text area",
  },
};
