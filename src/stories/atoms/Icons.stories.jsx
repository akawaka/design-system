import * as OutlineIcons24 from '@heroicons/react/24/outline';
import * as SolidIcons24 from '@heroicons/react/24/solid';
import * as SolidIcons20 from '@heroicons/react/20/solid';
import * as SolidIcons16 from '@heroicons/react/16/solid';
import PropTypes from 'prop-types';

export default {
  title: "Design System/Atoms/Icons",
  parameters: {
    layout: "centered",
  },
};

const outlineIcons24 = Object.keys(OutlineIcons24).map((iconKey) => ({
  icon: OutlineIcons24[iconKey],
  importName: iconKey,
}));

const solidIcons24 = Object.keys(SolidIcons24).map((iconKey) => ({
  icon: SolidIcons24[iconKey],
  importName: iconKey,
}));

const solidIcons20 = Object.keys(SolidIcons20).map((iconKey) => ({
  icon: SolidIcons20[iconKey],
  importName: iconKey,
}));

const solidIcons16 = Object.keys(SolidIcons16).map((iconKey) => ({
  icon: SolidIcons16[iconKey],
  importName: iconKey,
}));

const IconTemplate = ({ IconComponent, importName, sizeClass }) => (
  <div className="flex flex-col items-center p-4 space-y-4">
    <IconComponent className={`${sizeClass} text-slate-800`} />
    <span className="text-xs text-stone-400">{importName}</span>
  </div>
);

IconTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
  importName: PropTypes.string.isRequired,
  sizeClass: PropTypes.string.isRequired,
};

export const AllIcons = {
  render: () => (
    <div className="flex flex-col space-y-12">
      <div className="p-4 border rounded-lg bg-stone-100 border-stone-200">
        <h2 className="text-lg font-semibold text-stone-800">How to use Icons</h2>
        <p className="text-sm text-stone-600">
          To use an icon in your React component, import the icon using the importName shown below.
        </p>
        <pre className="p-4 mt-2 text-sm rounded text-stone-800 bg-stone-200">
          {`import { IconName } from '@heroicons/react/24/outline';\n// Replace \`IconName\` with the actual name of the icon you want to use.\n\nThen use it like that : <IconName className="text-red-600 size-6" />`}
        </pre>
      </div>

      {/* Outline Icons 24px */}
      <div>
        <span className="text-xl text-stone-800">Outline Icons 24px</span>
        <div className="grid grid-cols-4 gap-4 p-8 bg-white border shadow-xl border-stone-200 md:grid-cols-5 xl:grid-cols-8 rounded-xl">
          {outlineIcons24.map(({ icon: IconComponent, importName }) => (
            <IconTemplate key={importName} IconComponent={IconComponent} importName={importName} sizeClass="size-6" />
          ))}
        </div>
      </div>

      {/* Solid Icons 24px */}
      <div>
        <span className="text-xl text-stone-800">Solid Icons 24px</span>
        <div className="grid grid-cols-4 gap-4 p-8 bg-white border shadow-xl border-stone-200 md:grid-cols-5 xl:grid-cols-8 rounded-xl">
          {solidIcons24.map(({ icon: IconComponent, importName }) => (
            <IconTemplate key={importName} IconComponent={IconComponent} importName={importName} sizeClass="size-6" />
          ))}
        </div>
      </div>

      {/* Solid Icons 20px */}
      <div>
        <span className="text-xl text-stone-800">Solid Icons 20px</span>
        <div className="grid grid-cols-4 gap-4 p-8 bg-white border shadow-xl border-stone-200 md:grid-cols-5 xl:grid-cols-8 rounded-xl">
          {solidIcons20.map(({ icon: IconComponent, importName }) => (
            <IconTemplate key={importName} IconComponent={IconComponent} importName={importName} sizeClass="size-5" />
          ))}
        </div>
      </div>

      {/* Solid Icons 16px */}
      <div>
        <span className="text-xl text-stone-800">Solid Icons 16px</span>
        <div className="grid grid-cols-4 gap-4 p-8 bg-white border shadow-xl border-stone-200 md:grid-cols-5 xl:grid-cols-8 rounded-xl">
          {solidIcons16.map(({ icon: IconComponent, importName }) => (
            <IconTemplate key={importName} IconComponent={IconComponent} importName={importName} sizeClass="size-4" />
          ))}
        </div>
      </div>
    </div>
  ),
};
