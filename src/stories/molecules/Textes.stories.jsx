import PropTypes from "prop-types";
import { Heading } from "../../components/typography/Heading";
import { BodyText } from "../../components/typography/BodyText";
import { FeedbackText } from "../../components/typography/FeedbackText";

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
    type: {
      control: "select",
      options: ["alert", "warning", "info", "validation"],
    },
  },
};

// Templates
const HeadlineTemplate = ({ level, children, white }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <Heading level={level} white={white}>
      {children}
    </Heading>
    <p className="font-semibold">Heading Level {level}</p>
  </div>
);

HeadlineTemplate.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  white: PropTypes.bool,
};

const BodyTextTemplate = ({ variant, children }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <BodyText variant={variant}>{children}</BodyText>
    <p className="font-semibold">{variant}</p>
  </div>
);

BodyTextTemplate.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const FeedbackTextTemplate = ({ type, children }) => (
  <div className="flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300">
    <FeedbackText type={type}>{children}</FeedbackText>
    <p className="font-semibold">{type}</p>
  </div>
);

FeedbackTextTemplate.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

// Headline Stories
export const HeadingLevel1 = {
  args: {
    level: 1,
    children: "Des experts pour vos projets web",
    white: false,
  },
  render: (args) => <HeadlineTemplate {...args} />,
};

export const HeadingLevel2 = {
  args: {
    level: 2,
    children: "Des experts pour vos projets web",
    white: false,
  },
  render: (args) => <HeadlineTemplate {...args} />,
};

export const HeadingLevel3 = {
  args: {
    level: 3,
    children: "Des experts pour vos projets web",
    white: false,
  },
  render: (args) => <HeadlineTemplate {...args} />,
};

// Body Text Stories
export const ParagraphText = {
  args: {
    variant: "paragraph",
    children:
      "Nous avons pour objectif de réaliser des prestations de qualités tout en respectant nos valeurs humaines, éthiques et notre envie de partage.",
  },
  render: (args) => <BodyTextTemplate {...args} />,
};

export const SmallText = {
  args: {
    variant: "small",
    children:
      "Nous avons pour objectif de réaliser des prestations de qualités tout en respectant nos valeurs humaines, éthiques et notre envie de partage.",
  },
  render: (args) => <BodyTextTemplate {...args} />,
};

export const LabelText = {
  args: {
    variant: "label",
    children:
      "Nous avons pour objectif de réaliser des prestations de qualités tout en respectant nos valeurs humaines, éthiques et notre envie de partage.",
  },
  render: (args) => <BodyTextTemplate {...args} />,
};

// Feedback Text Stories
export const AlertFeedback = {
  args: {
    type: "alert",
    children: "This is an alert message.",
  },
  render: (args) => <FeedbackTextTemplate {...args} />,
};

export const WarningFeedback = {
  args: {
    type: "warning",
    children: "This is a warning message.",
  },
  render: (args) => <FeedbackTextTemplate {...args} />,
};

export const InfoFeedback = {
  args: {
    type: "info",
    children: "This is an informational message.",
  },
  render: (args) => <FeedbackTextTemplate {...args} />,
};

export const ValidationFeedback = {
  args: {
    type: "validation",
    children: "This is a validation message.",
  },
  render: (args) => <FeedbackTextTemplate {...args} />,
};
