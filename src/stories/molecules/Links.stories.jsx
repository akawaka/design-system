import PropTypes from "prop-types";
import Link from "../../components/links/Link";

export default {
  title: "Design System/Molecules/Links",
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
    },
    label: {
      control: "text",
    },
  },
};

// Define link variants with descriptions
const linkVariants = {
  default: { description: "Default link style." },
};

// Updated LinkTemplate to display name and description
const LinkTemplate = ({ href, label }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <Link href={href} label={label} />
    <p className="font-semibold">default</p>
    <p className="text-sm text-stone-600">{linkVariants.default.description}</p>
  </div>
);

LinkTemplate.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

// Render all link variants with descriptions
export const AllLinks = {
  render: () => (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap space-x-4 w-fit">
        <LinkTemplate
          href="https://example.com"
          label="Example Link"
        />
      </div>
    </div>
  ),
};
