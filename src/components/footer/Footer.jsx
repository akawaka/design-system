import Link from "../links/Link";
import logo from "../../assets/logo_akawaka_blanc.svg";
import { Button } from "../buttons/Button";
import { BodyText } from "../typography/BodyText";
import { HomeIcon, UserIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="py-8 mx-2 text-white bg-stone-900 rounded-t-3xl">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between md:flex-row md:space-x-48">
          <div className="flex flex-col items-start mb-4 md:mb-0">
            <img src={logo} alt="Company Logo" className="w-48 h-auto mb-4" />
            <div className="flex space-x-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button variant="icon">
                  <HomeIcon className="w-5 h-5" />
              </Button>
                </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="icon">
                  <UserIcon className="w-5 h-5" />
                </Button>
              </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button variant="icon">
                  <EnvelopeIcon className="w-5 h-5" />
              </Button>
                </a>
            </div>
          </div>
          <div className="flex mt-8 space-x-8">
            <Link href="/about" label="About Us" whiteText={true} />
            <Link href="/contact" label="Contact" whiteText={true} />
          </div>
        </div>
        <div className="mt-12 border-t border-stone-500">
          <BodyText variant="small" className="mt-4 text-center text-white">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </BodyText>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
