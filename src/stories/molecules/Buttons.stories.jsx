import PropTypes from "prop-types";
import { Button } from "../../components/buttons/Button";
import { ArrowLeftIcon } from '@heroicons/react/20/solid';

export default {
  title: "Design System/Molecules/Buttons",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ['primary', 'secondary', 'icon', 'tertiary'],
    },
    label: {
      control: "text",
    },
  },
};

// Define button variants with descriptions
const buttonVariants = {
  primary: { description: "Primary button style." },
  secondary: { description: "Secondary button style." },
  tertiary: { description: "Tertiary button style." },
  icon: { description: "Icon button style." },
};

// Updated ButtonTemplate to display name and description
const ButtonTemplate = ({ variant, label }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    {variant === 'icon' ? (
      <Button variant={variant}>
        <a href="/">
          <ArrowLeftIcon className="w-8 h-8" />
        </a>
      </Button>
    ) : (
      <Button variant={variant} label={label} />
    )}
    <p className="font-semibold">{variant}</p>
    <p className="text-sm text-stone-600">{buttonVariants[variant].description}</p>
  </div>
);

ButtonTemplate.propTypes = {
  variant: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.node,
};

// Render all button variants with descriptions
export const AllButtons = {
  render: () => (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap space-x-4 w-fit">
        {Object.keys(buttonVariants).map((variantKey) => (
          <ButtonTemplate
            key={variantKey}
            variant={variantKey}
            label="Button"
          />
        ))}
      </div>
    </div>
  ),
};

