import PropTypes from "prop-types";
import { Heading } from "../../components/typography/Headlines";
import { BodyText } from "../../components/typography/BodyText";

export default {
  title: "Design System/Molecules/Textes",
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
    variant: {
      control: "select",
      options: ["paragraph", "small", "label"],
    },
    white: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
};

// Define headline levels with descriptions
const headlineLevels = {
  1: { description: "Heading level 1." },
  2: { description: "Heading level 2." },
  3: { description: "Any other Heading level." },
};

// Define body text variants with descriptions
const bodyTextVariants = {
  paragraph: { description: "Paragraph text." },
  small: { description: "Small text." },
  label: { description: "Label text." },
};

// Updated HeadlineTemplate to display name and description
const HeadlineTemplate = ({ level, children, white }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <Heading level={level} white={white}>
      {children}
    </Heading>
    <p className="font-semibold">Heading Level {level}</p>
    <p className="text-sm text-stone-600">
      {headlineLevels[level].description}
    </p>
  </div>
);

HeadlineTemplate.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  white: PropTypes.bool,
};

// Updated BodyTextTemplate to display name and description
const BodyTextTemplate = ({ variant, children }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <BodyText variant={variant}>{children}</BodyText>
    <p className="font-semibold">{variant}</p>
    <p className="text-sm text-stone-600">
      {bodyTextVariants[variant].description}
    </p>
  </div>
);

BodyTextTemplate.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

// Render all headline levels with descriptions
export const AllHeadlines = {
  render: () => (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap gap-x-4 w-fit">
        {Object.keys(headlineLevels).map((levelKey) => (
          <HeadlineTemplate key={levelKey} level={parseInt(levelKey)}>
            Des experts pour vos projets web
          </HeadlineTemplate>
        ))}
      </div>
    </div>
  ),
};

// Render all body text variants with descriptions
export const AllBodyTexts = {
  render: () => (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap gap-x-4 w-fit">
        {Object.keys(bodyTextVariants).map((variantKey) => (
          <BodyTextTemplate key={variantKey} variant={variantKey}>
            Nous avons pour objectif de réaliser des prestations de qualités
            tout en respectant nos valeurs humaines, éthiques et notre envie de
            partage.
          </BodyTextTemplate>
        ))}
      </div>
    </div>
  ),
};
