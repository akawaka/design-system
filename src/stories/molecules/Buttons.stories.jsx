import PropTypes from "prop-types";
import { Button } from "../../components/buttons/Button";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

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
          <ArrowLeftIcon className="size-6" />
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


export const PrimaryButton = {
  args: {
    variant: "primary",
    label: "Button",
  },
  render: (args) => <ButtonTemplate {...args} />,
};

export const SecondaryButton = {
  args: {
    variant: "secondary",
    label: "Button",
  },
  render: (args) => <ButtonTemplate {...args} />,
};

export const TertiaryButton = {
  args: {
    variant: "tertiary",
    label: "Button",
  },
  render: (args) => <ButtonTemplate {...args} />,
};

export const IconButton = {
  args: {
    variant: "icon",
  },
  render: (args) => <ButtonTemplate {...args} />,
};
