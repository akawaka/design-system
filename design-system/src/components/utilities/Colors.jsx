// src/components/utilities/Colors.jsx
import PropTypes from 'prop-types';


const tailwindColors = {
  blue: [900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  gray: [900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  red: [900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  orange: [900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  yellow: [900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  green: [900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  teal: [900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  indigo: [900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  purple: [900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  pink: [900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
};

const safelistClasses = `
  bg-blue-900 bg-blue-800 bg-blue-700 bg-blue-600 bg-blue-500 bg-blue-400 bg-blue-300 bg-blue-200 bg-blue-100 bg-blue-50
  bg-gray-900 bg-gray-800 bg-gray-700 bg-gray-600 bg-gray-500 bg-gray-400 bg-gray-300 bg-gray-200 bg-gray-100 bg-gray-50
  bg-red-900 bg-red-800 bg-red-700 bg-red-600 bg-red-500 bg-red-400 bg-red-300 bg-red-200 bg-red-100 bg-red-50
  bg-orange-900 bg-orange-800 bg-orange-700 bg-orange-600 bg-orange-500 bg-orange-400 bg-orange-300 bg-orange-200 bg-orange-100 bg-orange-50
  bg-yellow-900 bg-yellow-800 bg-yellow-700 bg-yellow-600 bg-yellow-500 bg-yellow-400 bg-yellow-300 bg-yellow-200 bg-yellow-100 bg-yellow-50
  bg-green-900 bg-green-800 bg-green-700 bg-green-600 bg-green-500 bg-green-400 bg-green-300 bg-green-200 bg-green-100 bg-green-50
  bg-teal-900 bg-teal-800 bg-teal-700 bg-teal-600 bg-teal-500 bg-teal-400 bg-teal-300 bg-teal-200 bg-teal-100 bg-teal-50
  bg-indigo-900 bg-indigo-800 bg-indigo-700 bg-indigo-600 bg-indigo-500 bg-indigo-400 bg-indigo-300 bg-indigo-200 bg-indigo-100 bg-indigo-50
  bg-purple-900 bg-purple-800 bg-purple-700 bg-purple-600 bg-purple-500 bg-purple-400 bg-purple-300 bg-purple-200 bg-purple-100 bg-purple-50
  bg-pink-900 bg-pink-800 bg-pink-700 bg-pink-600 bg-pink-500 bg-pink-400 bg-pink-300 bg-pink-200 bg-pink-100 bg-pink-50
`;

export const Colors = () => {
  const baseStyle = 'p-4 text-white font-semibold rounded-lg m-2 text-center'; // Style for each color square

  return (
    <div className="flex flex-col p-12 space-y-8 bg-white border border-gray-200 shadow-xl rounded-xl">
      {Object.keys(tailwindColors).map((color) => (
        <div key={color} className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-gray-800">{color.charAt(0).toUpperCase() + color.slice(1)}</h2>
          <div className="flex items-center space-x-4">
            {tailwindColors[color].map((shade) => (
              <div
                key={`${color}-${shade}`}
                className={`${baseStyle} bg-${color}-${shade}`}
              >
                {color}-{shade}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

Colors.propTypes = {
  /**
   * Color type (primary, secondary, tertiary)
   */
  /**
   * Content to display inside the Colors component
   */
  children: PropTypes.node,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

Colors.defaultProps = {
  children: '',
  className: '',
};

export default Colors;
