import PropTypes from "prop-types";
import Card from "../../components/cards/Card";

export default {
  title: "Design System/Molecules/Cards",
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: {
        type: "select",
        options: ["bg-white", "bg-stone-900"],
      },
    },
    children: {
      control: "text",
    },
  },
};

// Template for a single card story
const CardTemplate = ({ backgroundColor, children }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <Card backgroundColor={backgroundColor}>
      <div
        className={`p-4 space-y-4 h-80 ${
          backgroundColor === "bg-stone-900" ? "text-stone-50" : ""
        }`}
      >
        {children || `This is a card with ${backgroundColor} background.`}
        <p className="font-semibold">{backgroundColor}</p>
      </div>
    </Card>
    <code className="block p-2 mt-2 text-sm bg-gray-100 rounded">
      {`<Card backgroundColor="${backgroundColor}">...</Card>`}
    </code>
  </div>
);

CardTemplate.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.string,
};

// Individual stories for each card
export const WhiteCard = {
  args: {
    backgroundColor: "bg-white",
    children: "This is a card with a white background.",
  },
  render: (args) => <CardTemplate {...args} />,
};

export const BlackCard = {
  args: {
    backgroundColor: "bg-stone-900",
    children: "This is a card with a black background.",
  },
  render: (args) => <CardTemplate {...args} />,
};
