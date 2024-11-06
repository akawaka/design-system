import PropTypes from "prop-types";
import Badge from "../../components/badges/Badge";

export default {
  title: "Design System/Molecules/Badges",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["withBorder"],
    },
    children: {
      control: "text",
    },
  },
};

// Define badge variants with descriptions
const badgeVariants = {
  withBorder: { description: "Badge with border." },
};

// Updated BadgeTemplate to display name and description
const BadgeTemplate = ({ variant, children }) => (
  <div className="flex-grow w-full p-5 space-y-4 border shadow-md border-stone-300">
    <Badge variant={variant}>
      {children}
    </Badge>
    <div>
      <p className="text-sm">
        {badgeVariants[variant].description}
      </p>
    </div>
  </div>
);

BadgeTemplate.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

// Render all badge variants with descriptions
export const AllBadges = {
  render: () => (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap gap-x-4 w-fit">
        {Object.keys(badgeVariants).map((variantKey) => (
          <BadgeTemplate key={variantKey} variant={variantKey}>
            This is a badge
          </BadgeTemplate>
        ))}
      </div>
    </div>
  ),
};
