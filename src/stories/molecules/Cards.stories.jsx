import PropTypes from "prop-types";
import Card from "../../components/cards/Card";

export default {
  title: "Design System/Molecules/Cards",
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    children: {
      control: "text",
    },
  },
};

// Define card background colors with descriptions
const cardBackgroundColors = {
  "bg-white": { description: "Default background color." },
  "bg-stone-900": { description: "Darkest stone background color." },
};

// Updated CardTemplate to display name and description
const CardTemplate = ({ backgroundColor, children }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <Card backgroundColor={backgroundColor}>
      <div className={`p-4 space-y-4 h-80 ${backgroundColor === "bg-stone-900" ? "text-stone-50" : ""}`}>{children}
        <p className="font-semibold">{backgroundColor}</p>
        <p className="text-sm">
          {cardBackgroundColors[backgroundColor].description}
        </p>
      </div>
    </Card>
  </div>
);

CardTemplate.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

// Render all card background colors with descriptions
export const AllCards = {
  render: () => (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap gap-x-4 w-fit">
        {Object.keys(cardBackgroundColors).map((colorKey) => (
          <CardTemplate key={colorKey} backgroundColor={colorKey}>
            This is a card with {colorKey} background.
          </CardTemplate>
        ))}
      </div>
    </div>
  ),
};
