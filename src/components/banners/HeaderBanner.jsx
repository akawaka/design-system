import Navbar from "../navigations/Navbar";
import { Heading } from "../typography/Heading";
import { BodyText } from "../typography/BodyText";
import { Button } from "../buttons/Button";

const HeaderBanner = () => {
  return (
    <div className="relative">
      <div className=" absolute inset-2 bottom-0 rounded-3xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"></div>
      <div className="relative px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-7xl">
          <div className="pt-12">
            <Navbar />
            <div className="pt-12 pb-24 md:pb-48 md:pt-36">
              <Heading level={1}>Des experts pour vos projets web</Heading>
              <div className="max-w-lg pt-8">
                <BodyText variant="headline">
                  Nous concevons et améliorons vos projets avec des
                  méthodologies DDD, garantissant qualité et durabilité, tout en
                  offrant une collaboration flexible en régie ou en forfait.
                </BodyText>
              </div>
              <div className="flex flex-col mt-12 gap-x-6 gap-y-4 sm:flex-row">
                <Button variant="primary" label="Nos services" />
                <Button variant="secondary" label="En savoir plus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
