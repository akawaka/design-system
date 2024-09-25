import AkawakaWhite from '../../assets/logo_akawaka_blanc.svg';
import AkawakaBlack from '../../assets/logo_akawaka_noir.png';

export const Logos = () => {
  return (
    <div className="flex flex-col p-8 space-y-8 bg-white border border-gray-200 shadow-xl rounded-xl">
      <div>
        <h2 className="mb-4 text-xl text-gray-800">Logos</h2>
        <div className="grid grid-cols-2 gap-4 p-8 bg-white border border-gray-200 shadow-xl rounded-xl">

          {/* Farming Illustration */}
          <div className="relative flex flex-col items-center justify-center px-12 py-8 transition duration-300 ease-out bg-black border border-gray-300 rounded-xl">
            <img src={AkawakaWhite} alt="Farming Illustration" className="w-24 h-24" />
          </div>

          {/* Augmented Reality Illustration */}
          <div className="relative flex flex-col items-center justify-center px-12 py-8 transition duration-300 ease-out border border-gray-300 rounded-xl">
            <img src={AkawakaBlack} alt="Augmented Reality Illustration" className="w-24 h-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
