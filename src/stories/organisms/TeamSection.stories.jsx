import TeamSection from "../../components/sections/TeamSection";
import { Heading } from "../../components/typography/Heading";
import { BodyText } from "../../components/typography/BodyText";

const meta = {
  title: "Design System/Organisms/TeamSection",
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;

export const DefaultTeamSection = () => (
  <TeamSection>
    <BodyText variant="label">Une équipe engagée</BodyText>
    <Heading level={2} className="mt-2">
      Notre objectif
    </Heading>
    <BodyText variant="headline" className="mt-6">
      Notre équipe s'engage à fournir des prestations de qualité, en respectant
      nos valeurs humaines et éthiques, tout en soutenant l'Open Source et notre
      communauté.
    </BodyText>
    <BodyText variant="paragraph" className="mt-6">
      Nous avons pour objectif de réaliser des prestations de qualités tout en
      respectant nos valeurs humaines, éthiques et notre envie de partage. Notre
      engagement s'inscrit également au delà de la réalisation de code. Nous
      contribuons également à notre écosystème au travers de notre investissement
      à l'Open Source et nos actions communautaires.
    </BodyText>
  </TeamSection>
);
