import { useState } from "react";
import { Accordion } from "../../components/accordions/Accordion";
import { BodyText } from "../../components/typography/BodyText";

const meta = {
  title: "Design System/Organisms/Accordions",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Title of the accordion" },
    children: { control: "text", description: "Content of the accordion" },
    initialOpen: { control: "boolean", description: "Whether the accordion is initially open" },
  },
};

export default meta;

export const DefaultAccordion = () => {
  const [isOpen] = useState(false);

  return (
    <Accordion
      title="Default Accordion"
      initialOpen={isOpen}
    >
      <BodyText variant="paragraph">This is the content of the default accordion.</BodyText>
    </Accordion>
  );
};

export const OpenAccordion = () => {
  return (
    <Accordion
      title="Open Accordion"
      initialOpen={true}
    >
      <BodyText variant="paragraph">This accordion is open by default.</BodyText>
    </Accordion>
  );
};

export const ClosedAccordion = () => {
  return (
    <Accordion
      title="Closed Accordion"
      initialOpen={false}
    >
      <BodyText variant="paragraph">This accordion is closed by default.</BodyText>
    </Accordion>
  );
};
