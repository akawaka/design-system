import FarmingSvg from '../../assets/farming.svg';
import AugmentedRealitySvg from '../../assets/augmented_reality.svg';
import LandingSvg from '../../assets/landing.svg';
import MoonSvg from '../../assets/moon.svg';
import PeopleSvg from '../../assets/people.svg';

export const Illustrations = () => {
  return (
    <div className="flex flex-col p-8 space-y-8 bg-white border border-gray-200 shadow-xl rounded-xl">
      <div>
        <h2 className="mb-4 text-xl text-gray-800">Illustrations</h2>
        <div className="grid grid-cols-2 gap-4 p-8 bg-white border border-gray-200 shadow-xl rounded-xl">

          {/* Farming Illustration */}
          <div className="relative flex flex-col items-center px-12 py-8 transition duration-300 ease-out border border-gray-300 rounded-xl">
            <img src={FarmingSvg} alt="Farming Illustration" className="w-24 h-24" />
          </div>

          {/* Augmented Reality Illustration */}
          <div className="relative flex flex-col items-center px-12 py-8 transition duration-300 ease-out border border-gray-300 rounded-xl">
            <img src={AugmentedRealitySvg} alt="Augmented Reality Illustration" className="w-24 h-24" />
          </div>

          {/* Landing Illustration */}
          <div className="relative flex flex-col items-center px-12 py-8 transition duration-300 ease-out border border-gray-300 rounded-xl">
            <img src={LandingSvg} alt="Landing Illustration" className="w-24 h-24" />
          </div>

          {/* Moon Illustration */}
          <div className="relative flex flex-col items-center px-12 py-8 transition duration-300 ease-out border border-gray-300 rounded-xl">
            <img src={MoonSvg} alt="Moon Illustration" className="w-24 h-24" />
          </div>

          {/* People Illustration */}
          <div className="relative flex flex-col items-center px-12 py-8 transition duration-300 ease-out border border-gray-300 rounded-xl">
            <img src={PeopleSvg} alt="People Illustration" className="w-24 h-24" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Illustrations;
