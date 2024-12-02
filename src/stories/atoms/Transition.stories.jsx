import PropTypes from "prop-types";

export default {
  title: "Design System/Atoms/Transitions",
  tags: ["autodocs"],
};

// Define transition categories with descriptions
const transitionTokens = {
  "transition ease-out duration-300": { class: "transition ease-out duration-300", description: "Actions transition." },
};

// Updated TransitionTemplate to display name and description
const TransitionTemplate = ({ transitionClass, name, description }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <button className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-200 ${transitionClass}`}>Hover me</button>
    <p className="font-semibold">{name}</p>
    <p className="text-sm text-stone-600">{description}</p>
  </div>
);

TransitionTemplate.propTypes = {
  transitionClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Render all transition categories with descriptions
export const AllTransitions = {
  render: () => (
    <div className="max-w-5xl mx-auto">
      <div className="flex space-x-4 w-fit">
        {Object.keys(transitionTokens).map((transitionKey) => (
          <TransitionTemplate
            key={transitionKey}
            transitionClass={transitionTokens[transitionKey].class}
            name={transitionKey}
            description={transitionTokens[transitionKey].description}
          />
        ))}
      </div>
    </div>
  ),
};
