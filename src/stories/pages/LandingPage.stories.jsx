import { DefaultHeaderBanner } from "../organisms/HeaderBanner.stories";
import { DefaultLogoCloud } from "../organisms/LogoCloud.stories";
import { DefaultLeftImageRightTextSection } from "../organisms/LeftImageRightTextSection.stories";
import { DefaultLogoGrid } from "../organisms/LogoGrid.stories";
import { DefaultTeamSection } from "../organisms/TeamSection.stories";
import { DefaultFooter } from "../organisms/Footer.stories";

export default {
  title: "Design System/Pages/LandingPage",
  tags: ["autodocs"],
};

export const LandingPage = () => (
  <div>
    <DefaultHeaderBanner />
    <main>
      <DefaultLogoCloud />
      <DefaultLeftImageRightTextSection />
      <DefaultLogoGrid />
      <DefaultTeamSection />
      <DefaultFooter />
    </main>
  </div>
);
