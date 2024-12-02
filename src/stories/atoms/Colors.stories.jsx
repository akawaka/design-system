import PropTypes from "prop-types";

export default {
  title: "Design System/Atoms/Colors",
  tags: ["autodocs"],
};

// Define color categories with descriptions
const primaryColors = {
  "action-primary": { class: "bg-stone-900", description: "Used for actions. Use white text for contrast." },
  "action-hover": { class: "bg-stone-700", description: "Hover for actions." },
};

const neutralColors = {
  "background-main": { class: "bg-white", description: "Main background color." },
  "background-alternate": { class: "bg-stone-50", description: "Alternate background color." },
  "border-decorative": { class: "bg-stone-300", description: "Decorative border color." },
  "border-secondary": { class: "bg-stone-500", description: "Non-decorative borders and secondary text color." },
  "text-secondary-dark": { class: "bg-stone-700", description: "Dark secondary text color." },
  "text-heading": { class: "bg-stone-900", description: "Heading text and text actions color." },
};

const accentColors = {
  "error-light": { class: "bg-red-100", description: "Error or destructive actions (light tone)." },
  "error-dark": { class: "bg-red-800", description: "Error or destructive actions (dark tone)." },
  "warning-light": { class: "bg-yellow-100", description: "Warning messages (light tone)." },
  "warning-dark": { class: "bg-yellow-800", description: "Warning messages (dark tone)." },
  "success-light": { class: "bg-green-100", description: "Positive actions or confirmations (light tone)." },
  "success-dark": { class: "bg-green-800", description: "Positive actions or confirmations (dark tone)." },
};

const gradientColors = {
  "highlight-gradient": { class: "bg-gradient-to-r from-[#fff1be] to-[#b060ff] via-[#ee87cb] bg-[linear-gradient(145deg,var(--tw-gradient-stops))] from-[28%] via-[70%]", description: "Decorative or highlight background gradient." },
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
