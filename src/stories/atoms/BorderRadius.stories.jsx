import PropTypes from "prop-types";

export default {
  title: "Design System/Atoms/BordersRadius",
  tags: ["autodocs"],
};

// Define border radius categories with descriptions
const borderRadiusSizes = {
  "rounded-md": {
    class: "rounded-md",
    description: "Used for small elements like buttons.",
  },
  "rounded-xl": {
    class: "rounded-xl",
    description: "Used for medium elements like cards.",
  },
  "rounded-3xl": {
    class: "rounded-3xl",
    description: "Used for large elements like backgrounds.",
  },
  "rounded-full": {
    class: "rounded-full",
    description: "Used for circular elements like avatars.",
  },
};

// Template for rendering each border radius example
const BorderRadiusTemplate = ({ borderRadius, name, description }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <div className={`w-40 h-40 ${borderRadius} bg-stone-900`}></div>
    <p className="font-semibold">{name}</p>
    <p className="text-sm text-stone-600">{description}</p>
    <code className="block p-2 mt-2 text-sm bg-gray-100 rounded">
      {`<div className="${borderRadius}">...</div>`}
    </code>
  </div>
);

BorderRadiusTemplate.propTypes = {
  borderRadius: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Render all border radius categories
export const AllBorderRadius = {
  render: () => (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap gap-4">
        {Object.entries(borderRadiusSizes).map(
          ([key, { class: borderRadius, description }]) => (
            <BorderRadiusTemplate
              key={key}
              borderRadius={borderRadius}
              name={key}
              description={description}
            />
          )
        )}
      </div>
    </div>
  ),
};
