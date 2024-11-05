import PropTypes from "prop-types";

export default {
  title: "Design System/Tokens/Spacing",
  tags: ["autodocs"],
  argTypes: {
    padding: {
      control: "text",
    },
  },
};

// Define padding categories with descriptions
const paddingSizes = {
  "p-1": { class: "p-1", description: "Used for very closely related content." },
  "p-2": { class: "p-2", description: "Used for closely related content." },
  "p-4": { class: "p-4", description: "Used for content with a bit more spacing." },
  "p-6": { class: "p-6", description: "Used for moderately spaced content." },
  "p-8": { class: "p-8", description: "Used for content with significant spacing." },
  "p-12": { class: "p-12", description: "Used for content with large spacing." },
  "p-24": { class: "p-24", description: "Used for content with very large spacing." },
  "p-48": { class: "p-48", description: "Used for content with maximum spacing." },
};

// Updated SpacingTemplate to display name and description
const SpacingTemplate = ({ padding, name, description }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <div className={`w-40 ${padding} bg-stone-200`}></div>
    <p className="font-semibold">{name}</p>
    <p className="text-sm text-stone-600">{description}</p>
  </div>
);

SpacingTemplate.propTypes = {
  padding: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Render all padding categories with descriptions
export const AllSpacing = {
  render: () => (
    <div className="">
      <div className="flex flex-wrap space-x-4 w-fit">
        {Object.keys(paddingSizes).map((paddingKey) => (
          <SpacingTemplate
            key={paddingKey}
            padding={paddingSizes[paddingKey].class}
            name={paddingKey}
            description={paddingSizes[paddingKey].description}
          />
        ))}
      </div>
    </div>
  ),
};
