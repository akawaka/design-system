import PropTypes from "prop-types";

export default {
  title: "Design System/Tokens/Colors",
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color",
    },
  },
};

// Define color categories with descriptions
const primaryColors = {
  "amber-500": { class: "bg-amber-500", description: "Used for actions. Use dark text for contrast." },
  "amber-300": { class: "bg-amber-300", description: "Hover for actions." },
};

const neutralColors = {
  "white": { class: "bg-white", description: "Main background color." },
  "stone-50": { class: "bg-stone-50", description: "Alternate background color." },
  "stone-300": { class: "bg-stone-300", description: "Decorative border color." },
  "stone-500": { class: "bg-stone-500", description: "Non-decorative borders and secondary text color." },
  "stone-700": { class: "bg-stone-700", description: "Dark secondary text color." },
  "stone-900": { class: "bg-stone-900", description: "Heading text and text actions color." },
};

const accentColors = {
  "red-200": { class: "bg-red-200", description: "Error or destructive actions (light tone)." },
  "red-600": { class: "bg-red-600", description: "Error or destructive actions (dark tone)." },
  "yellow-100": { class: "bg-yellow-100", description: "Warning messages (light tone)." },
  "yellow-500": { class: "bg-yellow-500", description: "Warning messages (dark tone)." },
  "green-200": { class: "bg-green-200", description: "Positive actions or confirmations (light tone)." },
  "green-500": { class: "bg-green-500", description: "Positive actions or confirmations (dark tone)." },
};

const gradientColors = {
  "pink-500 to amber-500": { class: "bg-gradient-to-r from-pink-600 to-amber-500", description: "Decorative or highlight background gradient." },
};

// Updated ColorTemplate to display name and description
const ColorTemplate = ({ color, name, description }) => (
  <div className="flex-grow w-40 p-5 m-2 space-y-2 border shadow-md border-stone-300">
    <div className={`w-24 h-24 ${color}`}></div>
    <p className="font-semibold">{name}</p>
    <p className="text-sm text-stone-600">{description}</p>
  </div>
);

ColorTemplate.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Render all color categories with descriptions
export const AllColors = {
  render: () => (
    <div className="max-w-5xl mx-auto">
      <div className="flex space-x-4 w-fit">
        {Object.keys(primaryColors).map((colorKey) => (
          <ColorTemplate
            key={colorKey}
            color={primaryColors[colorKey].class}
            name={colorKey}
            description={primaryColors[colorKey].description}
          />
        ))}
      </div>
      <div className="flex space-x-4 w-fit">
        {Object.keys(neutralColors).map((colorKey) => (
          <ColorTemplate
            key={colorKey}
            color={neutralColors[colorKey].class}
            name={colorKey}
            description={neutralColors[colorKey].description}
          />
        ))}
      </div>
      <div className="flex space-x-4 w-fit">
        {Object.keys(accentColors).map((colorKey) => (
          <ColorTemplate
            key={colorKey}
            color={accentColors[colorKey].class}
            name={colorKey}
            description={accentColors[colorKey].description}
          />
        ))}
      </div>
      <div className="flex space-x-4 w-fit">
        {Object.keys(gradientColors).map((colorKey) => (
          <ColorTemplate
            key={colorKey}
            color={gradientColors[colorKey].class}
            name={colorKey}
            description={gradientColors[colorKey].description}
          />
        ))}
      </div>
    </div>
  ),
};