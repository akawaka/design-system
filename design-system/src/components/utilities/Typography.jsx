import PropTypes from 'prop-types';

const typographySizes = {
  'text-xs': '0.75rem',
  'text-sm': '0.875rem',
  'text-base': '1rem',
  'text-lg': '1.125rem',
  'text-xl': '1.25rem',
  'text-2xl': '1.5rem',
  'text-3xl': '1.875rem',
  'text-4xl': '2.25rem',
  'text-5xl': '3rem',
  'text-6xl': '3.75rem',
  'text-7xl': '4.5rem',
};

const fontWeights = {
  'font-thin': 100,
  'font-extralight': 200,
  'font-light': 300,
  'font-normal': 400,
  'font-medium': 500,
  'font-semibold': 600,
  'font-bold': 700,
  'font-extrabold': 800,
  'font-black': 900,
};

const safelistClasses = `
  text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl text-5xl text-6xl text-7xl text-8xl text-9xl
  font-thin font-extralight font-light font-normal font-medium font-semibold font-bold font-extrabold font-black
`;

export const Typography = () => {
  const exampleSentence = 'Akawaka - Des experts pour vos projets web';

  return (
    <div className="flex flex-col p-12 space-y-20 bg-white border border-gray-200 shadow-xl rounded-xl">
      <div className="pb-20 border-b border-gray-200">
        <h2 className="font-bold text-gray-900 text-7xl">Font Sizes</h2>
        <div className="mt-12 space-y-8">
          {Object.keys(typographySizes).map((size) => (
            <div key={size} className="flex flex-col space-y-4 text-gray-800">
              <div className="space-x-1">
                <span className="font-bold text-cyan-500">{size}</span>
                <span className="font-semibold">: {typographySizes[size]}</span>
              </div>
              <div>
                <p className={`${size} text-gray-800`}>{exampleSentence}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Weights */}
      <div>
        <h2 className="font-bold text-gray-900 text-7xl">Font Weights</h2>
        <div className="mt-12 space-y-8">
          {Object.keys(fontWeights).map((weight) => (
            <div key={weight} className="grid grid-cols-2 text-gray-800">
              <div>
                <p className={`${weight} text-gray-800 text-xl`}>{exampleSentence}</p>
              </div>
              <div className="space-x-1">
                <span className="font-bold text-cyan-500">{weight}</span>
                <span className="font-semibold">: {fontWeights[weight]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Typography.propTypes = {
  /**
   * Optional content for the typography component
   */
  children: PropTypes.node,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

Typography.defaultProps = {
  children: '',
  className: '',
};

export default Typography;
