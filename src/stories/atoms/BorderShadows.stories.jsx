import PropTypes from "prop-types";

export default {
  title: "Design System/Atoms/BoxShadows",
  tags: ["autodocs"],
};

// Define box shadow categories with descriptions
const boxShadowSizes = {
  shadow: {
    class: "shadow",
    description:
      "Used for elements with a small amount of elevation like buttons.",
  },
  "shadow-lg": {
    class: "shadow-lg",
    description:
      "Used for elements with a medium amount of elevation like dropdowns.",
  },
  "shadow-xl": {
    class: "shadow-xl",
    description:
      "Used for elements with a large amount of elevation like modals.",
  },
};

// Template for rendering each box shadow example
const BoxShadowTemplate = ({ boxShadow, name, description }) => (
  <div className="flex-grow p-5 m-2 space-y-4 bg-white border border-stone-300">
    <div className={`w-40 h-40 ${boxShadow} bg-white`}></div>
    <p className="font-semibold">{name}</p>
    <p className="text-sm text-stone-600">{description}</p>
    <code className="block p-2 mt-2 text-sm bg-gray-100 rounded">
      {`<div className="${boxShadow}">...</div>`}
    </code>
  </div>
);

BoxShadowTemplate.propTypes = {
  boxShadow: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Render all box shadow categories
export const AllBoxShadows = {
  render: () => (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap gap-4">
        {Object.entries(boxShadowSizes).map(
          ([key, { class: boxShadow, description }]) => (
            <BoxShadowTemplate
              key={key}
              boxShadow={boxShadow}
              name={key}
              description={description}
            />
          )
        )}
      </div>
    </div>
  ),
};
