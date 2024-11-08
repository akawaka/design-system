import activinnovLogo from '../../assets/activinnov_logo.png';
import bricofenetreLogo from '../../assets/bricofenetre_logo.png';
import cfcLogo from '../../assets/cfc_logo.png';
import psihLogo from '../../assets/psih_logo.png';
import smspLogo from '../../assets/smsp_logo.png';
import wanimoLogo from '../../assets/wanimo_logo.png';

const LogoCloud = () => {
  return (
    <div className="py-12 pb-24 bg-white sm:pb-36">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-center max-w-lg grid-cols-4 mx-auto gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none">
          <img className="object-contain w-full col-span-2 max-h-12 lg:col-span-1" src={activinnovLogo} alt="Activinnov" width="158" height="48" />
          <img className="object-contain w-full col-span-2 max-h-12 lg:col-span-1" src={bricofenetreLogo} alt="Bricofenetre" width="158" height="48" />
          <img className="object-contain w-full col-span-2 max-h-12 lg:col-span-1" src={cfcLogo} alt="CFC" width="158" height="48" />
          <img className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1" src={psihLogo} alt="PSIH" width="158" height="48" />
          <img className="object-contain w-full col-span-2 max-h-12 lg:col-span-1" src={smspLogo} alt="SMSP" width="158" height="48" />
          <img className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1" src={wanimoLogo} alt="Wanimo" width="158" height="48" />
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
