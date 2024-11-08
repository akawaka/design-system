import AkawakaBlack from '../../assets/logo_akawaka_noir.png';
import Link from '../links/Link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 space-x-24">
      <div className="flex items-center ">
        <img src={AkawakaBlack} alt="Akawaka Logo" className="h-24" />
      </div>
      <div className="flex space-x-4">
        <Link href="#home" label="Home" />
        <Link href="#about" label="About" />
        <Link href="#services" label="Services" />
        <Link href="#contact" label="Contact" />
      </div>
    </nav>
  );
};

export default Navbar;
