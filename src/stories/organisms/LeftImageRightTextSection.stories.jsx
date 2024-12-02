import LeftImageRightTextSection from "../../components/sections/LeftImageRightTextSection";
import { Heading } from "../../components/typography/Heading";
import { BodyText } from "../../components/typography/BodyText";
import { Button } from "../../components/buttons/Button";
import syliusLogo from "../../assets/sylius_e-commerce.webp";
import akawakaTeams from "../../assets/akawaka_team_1.png";

const meta = {
  title: "Design System/Organisms/LeftImageRightTextSection",
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
  },
};

export default meta;

export const DefaultLeftImageRightTextSection = () => (
  <LeftImageRightTextSection imageSrc={syliusLogo} imageAlt="Sylius">
    <BodyText variant="label">Ecommerce</BodyText>
    <Heading level={2} className="mt-2">
      L&apos;Ecommerce avec Sylius
    </Heading>
    <BodyText variant="headline" className="mt-6">
      Maximisez vos ventes grâce à notre expertise en Sylius, avec une équipe de
      5 spécialistes pour vos projets B2B, B2C et Marketplace.
    </BodyText>
    <div className="max-w-xl mt-8 space-y-8">
      <BodyText variant="paragraph">
        Maitriser ses canaux de vente devient de plus en plus important pour les
        entreprises. Dans le but de donner le maximum de chances à vos projets,
        nous avons fait le choix d&apos;une solution technique solide, en accord
        avec l&apos;état de l&apos;art et qui nous permettent de faire tout ce
        que vous souhaitez. Vous retrouverez chez nous pas moins de 5 experts
        Sylius sur des projets B2B, B2C et Marketplace.
      </BodyText>
      <Button variant="tertiary" label="En savoir plus" className="mt-4" />
    </div>
  </LeftImageRightTextSection>
);

export const AkawakaTeamsLeftImageRightTextSection = () => (
  <LeftImageRightTextSection imageSrc={akawakaTeams} fullWidthImage={true} imageAlt="Akawaka Teams">
    <BodyText variant="label">Une équipe engagée</BodyText>
    <Heading level={2} className="mt-2">
      Notre objectif
    </Heading>
    <BodyText variant="headline" className="mt-6">
      Notre équipe s'engage à fournir des prestations de qualité, en respectant
      nos valeurs humaines et éthiques, tout en soutenant l'Open Source et notre
      communauté.
    </BodyText>
    <div className="max-w-xl mt-8 space-y-8">
      <BodyText variant="paragraph">
        Nous avons pour objectif de réaliser des prestations de qualités tout en
        respectant nos valeurs humaines, éthiques et notre envie de partage.
        Notre engagement s'inscrit également au delà de la réalisation de code.
        Nous contribuons également à notre écosystème au travers de notre
        investissement à l'Open Source et nos actions communautaires.
      </BodyText>
      <Button variant="tertiary" label="En savoir plus" className="mt-4" />
    </div>
  </LeftImageRightTextSection>
);
