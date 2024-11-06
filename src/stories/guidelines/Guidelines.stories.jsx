import PropTypes from "prop-types";

export default {
  title: "Design System/Documentation/Guidelines",
  tags: ["autodocs"],
};

// Define the structure of the design system
const designSystemStructure = {
  atoms: {
    description: "Atoms are the basic building blocks of our design system. They define the TailwindCSS values used to create more complex components.",
    examples: [
      { name: "Colors", component: "AllColors" },
      { name: "Border Radius", component: "AllBorderRadius" },
      { name: "Box Shadows", component: "AllBoxShadows" },
    ],
  },
  molecules: {
    description: "Molecules are combinations of atoms that form more complex UI components.",
    examples: [
      { name: "Badges", component: "AllBadges" },
      { name: "Cards", component: "AllCards" },
    ],
  },
  organisms: {
    description: "Organisms are relatively complex components that form distinct sections of an interface.",
    examples: [],
  },
  pages: {
    description: "Pages are specific views composed of organisms, molecules, and atoms.",
    examples: [],
  },
};

// Template to display the design system structure
const DesignSystemTemplate = ({ title, description, examples }) => (
  <div className="p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <p className="text-sm text-stone-600">{description}</p>
    <div className="space-y-4">
      {examples.map((example, index) => (
        <div key={index} className="p-4 border border-stone-300">
          <h3 className="text-xl font-semibold">{example.name}</h3>
          <example.component />
        </div>
      ))}
    </div>
  </div>
);

DesignSystemTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  examples: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired,
    })
  ).isRequired,
};

// Render the design system guidelines
export const DesignSystemGuidelines = {
  render: () => (
    <div className="max-w-5xl mx-auto">
      {Object.keys(designSystemStructure).map((key) => (
        <DesignSystemTemplate
          key={key}
          title={key.charAt(0).toUpperCase() + key.slice(1)}
          description={designSystemStructure[key].description}
          examples={designSystemStructure[key].examples}
        />
      ))}
    </div>
  ),
};
