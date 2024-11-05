import PropTypes from "prop-types";

export default {
  title: "Design System/Tokens/BordersRadius",
  tags: ["autodocs"],
  argTypes: {
    borderRadius: {
      control: "text",
    },
  },
};

// Define border radius categories with descriptions
const borderRadiusSizes = {
  "rounded-md": { class: "rounded-md", description: "Used for small elements like buttons." },
  "rounded-xl": { class: "rounded-xl", description: "Used for medium elements like cards." },
  "rounded-3xl": { class: "rounded-3xl", description: "Used for large elements like backgrounds." },
  "rounded-full": { class: "rounded-full", description: "Used for circular elements like avatars." },
};

// Updated BorderRadiusTemplate to display name and description
const BorderRadiusTemplate = ({ borderRadius, name, description }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <div className={`w-40 h-40 ${borderRadius} bg-stone-900`}></div>
    <p className="font-semibold">{name}</p>
    <p className="text-sm text-stone-600">{description}</p>
  </div>
);

BorderRadiusTemplate.propTypes = {
  borderRadius: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Render all border radius categories with descriptions
export const AllBorderRadius = {
  render: () => (
    <div className="max-w-5xl mx-auto">
      <div className="flex space-x-4 w-fit">
        {Object.keys(borderRadiusSizes).map((borderRadiusKey) => (
          <BorderRadiusTemplate
            key={borderRadiusKey}
            borderRadius={borderRadiusSizes[borderRadiusKey].class}
            name={borderRadiusKey}
            description={borderRadiusSizes[borderRadiusKey].description}
          />
        ))}
      </div>
    </div>
  ),
};
