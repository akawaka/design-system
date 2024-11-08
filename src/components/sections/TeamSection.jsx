import Heading from "../typography/Heading";
import BodyText from "../typography/BodyText";
import { Button } from "../buttons/Button";
import akawakaTeam1 from "../../assets/akawaka_team_1.png";
import akawakaTeam2 from "../../assets/akawaka_team_2.jpeg";
import akawakaTeam3 from "../../assets/akawaka_team_3.jpeg";
import akawakaTeam4 from "../../assets/akawaka_team_4.jpeg";

const TeamSection = () => {
  return (
    <div className="my-24 overflow-hidden">
      <div className="px-6 mx-auto max-w-7xl lg:flex lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <BodyText variant="label">Une équipe engagée</BodyText>
            <Heading level={2} className="mt-2">
              Notre objectif
            </Heading>
            <BodyText variant="headline" className="mt-8">
              Notre équipe s'engage à fournir des prestations de qualité, en
              respectant nos valeurs humaines et éthiques, tout en soutenant
              l'Open Source et notre communauté.
            </BodyText>
            <BodyText variant="paragraph" className="mt-8">
              Nous avons pour objectif de réaliser des prestations de qualités
              tout en respectant nos valeurs humaines, éthiques et notre envie
              de partage. Notre engagement s'inscrit également au delà de la
              réalisation de code. Nous contribuons également à notre écosystème
              au travers de notre investissement à l'Open Source et nos actions
              communautaires.
            </BodyText>
            <Button variant="tertiary" label="En savoir plus" className="mt-4" />
          </div>
          <div className="flex flex-wrap items-start justify-end gap-8 lg:contents">
            <div className="flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src={akawakaTeam1}
                alt="Akawaka Team 1"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-xl bg-stone-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="flex self-end justify-end flex-none order-first w-64 lg:w-auto">
                <img
                  src={akawakaTeam3}
                  alt="Akawaka Team 2"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-xl bg-stone-50 object-cover"
                />
              </div>
              <div className="flex justify-end flex-auto w-96 lg:w-auto lg:flex-none">
                <img
                  src={akawakaTeam2}
                  alt="Akawaka Team 3"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-xl bg-stone-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src={akawakaTeam4}
                  alt="Akawaka Team 4"
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-xl bg-stone-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
