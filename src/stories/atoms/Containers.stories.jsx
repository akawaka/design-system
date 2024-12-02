import PropTypes from "prop-types";

export default {
  title: "Design System/Atoms/Containers",
  tags: ["autodocs"],
};

// Define container max-width categories with descriptions
const containerMaxWidths = {
  "max-w-lg": { class: "max-w-lg", description: "Used for text content like headline"},
  "max-w-prose": { class: "max-w-prose", description: "Used for reading content." },
  "max-w-7xl": { class: "max-w-7xl", description: "Used for other content." },
};

// Updated ContainerTemplate to display name and description
const ContainerTemplate = ({ maxWidth, name, description }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <div className={`w-screen ${maxWidth} bg-stone-100 h-40`}></div>
    <p className="font-semibold">{name}</p>
    <p className="text-sm text-stone-600">{description}</p>
  </div>
);

ContainerTemplate.propTypes = {
  maxWidth: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Render all container max-width categories with descriptions
export const AllContainers = {
  render: () => (
    <div>
      <div className="flex flex-wrap gap-x-4 w-fit">
        {Object.keys(containerMaxWidths).map((maxWidthKey) => (
          <ContainerTemplate
            key={maxWidthKey}
            maxWidth={containerMaxWidths[maxWidthKey].class}
            name={maxWidthKey}
            description={containerMaxWidths[maxWidthKey].description}
          />
        ))}
      </div>
    </div>
  ),
};
