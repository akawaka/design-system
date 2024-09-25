import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';
import { useState } from 'react';

const outlineIcons = Object.keys(OutlineIcons).map((iconKey) => ({
  name: iconKey.replace(/Icon$/, '').replace(/([A-Z])/g, ' $1').trim() + ' (Outline)',
  icon: OutlineIcons[iconKey],
}));

const solidIcons = Object.keys(SolidIcons).map((iconKey) => ({
  name: iconKey.replace(/Icon$/, '').replace(/([A-Z])/g, ' $1').trim() + ' (Solid)',
  icon: SolidIcons[iconKey],
}));

export const Icons = () => {
  const [copiedIcon, setCopiedIcon] = useState('');

  const copyToClipboard = (svgElement, iconName) => {
    const svgHTML = svgElement.outerHTML;
    navigator.clipboard.writeText(svgHTML)
      .then(() => {
        setCopiedIcon(iconName);
      })
      .catch(err => console.error('Failed to copy!', err));
  };

  return (
    <div className="flex space-x-12">
      {/* Outline Icons */}
      <div>
        <span className="text-xl text-gray-800">
          Outline Icons
        </span>
        <div className="grid grid-cols-4 gap-4 p-8 bg-white border border-gray-200 shadow-xl md:grid-cols-5 xl:grid-cols-8 rounded-xl">
          {outlineIcons.map(({ name, icon: IconComponent }) => (
            <div
              key={name}
              className="relative flex flex-col items-center px-12 py-8 transition duration-300 ease-out border border-gray-300 cursor-pointer group rounded-xl hover:bg-gray-200"
              onClick={(e) => copyToClipboard(e.currentTarget.querySelector('svg'), name)}
            >
              <IconComponent className="size-8 text-slate-800" />
              {copiedIcon !== name && (
              <span className="absolute inset-0 px-1 py-1 text-sm font-bold text-center text-gray-900 transition-opacity duration-200 bg-gray-200 rounded-lg opacity-0 group-hover:opacity-60">
                Copy SVG
              </span>
              )}
              {copiedIcon === name && (
                <div className="absolute inset-0 p-2 space-x-1 bg-green-200 rounded-lg opacity-70">
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-sm font-bold text-gray-900">
                      Copied
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-gray-900 size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </div>

                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Solid Icons */}
      <div>
        <span className="text-xl text-gray-800">
          Outline Icons
        </span>
        <div className="grid grid-cols-4 gap-4 p-8 bg-white border border-gray-200 shadow-xl md:grid-cols-5 xl:grid-cols-8 rounded-xl">
          {solidIcons.map(({ name, icon: IconComponent }) => (
            <div
              key={name}
              className="relative flex flex-col items-center px-12 py-8 transition duration-300 ease-out border border-gray-300 cursor-pointer group rounded-xl hover:bg-gray-200"
              onClick={(e) => copyToClipboard(e.currentTarget.querySelector('svg'), name)}
            >
              <IconComponent className="size-8 text-slate-800" />
              {copiedIcon !== name && (
              <span className="absolute inset-0 px-1 py-1 text-sm font-bold text-center text-gray-900 transition-opacity duration-200 bg-gray-200 rounded-lg opacity-0 group-hover:opacity-60">
                Copy SVG
              </span>
              )}
              {copiedIcon === name && (
                <div className="absolute inset-0 p-2 space-x-1 bg-green-200 rounded-lg opacity-70">
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-sm font-bold text-gray-900">
                      Copied
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-gray-900 size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </div>

                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Icons;
