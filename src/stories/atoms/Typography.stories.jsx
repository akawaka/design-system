import PropTypes from "prop-types";

export default {
  title: "Design System/Atoms/Typography",
  tags: ["autodocs"],
  argTypes: {
    fontFamily: {
      control: "text",
    },
    fontSize: {
      control: "text",
    },
    fontWeight: {
      control: "text",
    },
    lineHeight: {
      control: "text",
    },
    letterSpacing: {
      control: "text",
    },
  },
};

// Define typography categories with descriptions
const typographyTokens = {
  fontFamilies: {
    "headline": { class: "font-headline", description: "Primary headline font family." },
    "body": { class: "font-body", description: "Primary body font family." },
  },
  fontSizes: {
    "text-6xl": { class: "text-6xl", description: "6x extra large font size." },
    "text-4xl": { class: "text-4xl", description: "4x extra large font size." },
    "text-2xl": { class: "text-2xl", description: "2x extra large font size." },
    "text-base": { class: "text-base", description: "Base font size." },
    "text-sm": { class: "text-sm", description: "Small font size." },
    "text-xs": { class: "text-xs", description: "Extra small font size." },
  },
  fontWeights: {
    "font-normal": { class: "font-normal", description: "Normal font weight." },
    "font-semibold": { class: "font-semibold", description: "semibold font weight for actions." },
  },
  letterSpacings: {
    "tracking-tight": { class: "tracking-tight", description: "Tight letter spacing." },
    "tracking-wider": { class: "tracking-wider", description: "Wider letter spacing." },
  },
};

// Updated TypographyTemplate to display name and description
const TypographyTemplate = ({ typographyClass, name, description }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <div className={`w-full ${typographyClass}`}>{name}</div>
    <p className="text-sm text-stone-600">{description}</p>
  </div>
);

TypographyTemplate.propTypes = {
  typographyClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Render all typography categories with descriptions
export const AllTypography = {
  render: () => (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap space-x-4 w-fit">
        {Object.keys(typographyTokens.fontFamilies).map((key) => (
          <TypographyTemplate
            key={key}
            typographyClass={typographyTokens.fontFamilies[key].class}
            name={key}
            description={typographyTokens.fontFamilies[key].description}
          />
        ))}
      </div>
      <div className="flex flex-wrap space-x-4 w-fit">
        {Object.keys(typographyTokens.fontSizes).map((key) => (
          <TypographyTemplate
            key={key}
            typographyClass={typographyTokens.fontSizes[key].class}
            name={key}
            description={typographyTokens.fontSizes[key].description}
          />
        ))}
      </div>
      <div className="flex flex-wrap space-x-4 w-fit">
        {Object.keys(typographyTokens.fontWeights).map((key) => (
          <TypographyTemplate
            key={key}
            typographyClass={typographyTokens.fontWeights[key].class}
            name={key}
            description={typographyTokens.fontWeights[key].description}
          />
        ))}
      </div>
      <div className="flex flex-wrap space-x-4 w-fit">
        {Object.keys(typographyTokens.letterSpacings).map((key) => (
          <TypographyTemplate
            key={key}
            typographyClass={typographyTokens.letterSpacings[key].class}
            name={key}
            description={typographyTokens.letterSpacings[key].description}
          />
        ))}
      </div>
    </div>
  ),
};
