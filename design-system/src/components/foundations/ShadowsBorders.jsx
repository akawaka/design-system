import PropTypes from 'prop-types';

const borderRadius = ['rounded-none', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full'];
const borderWidths = ['border-0', 'border-2', 'border-4', 'border-8'];
const borderStyles = ['border-solid', 'border-dashed', 'border-dotted'];

const boxShadows = ['shadow-sm', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-inner'];
const shadowColors = ['shadow-blue-500/50', 'shadow-red-500/50', 'shadow-green-500/50', 'shadow-yellow-500/50'];

export const ShadowsBorders = () => {
  const baseStyle = 'py-16 px-12 text-gray-800 font-semibold m-2 text-center bg-white';

  return (
    <div className="flex flex-col p-12 space-y-8 bg-gray-100 border border-gray-200 shadow-xl rounded-xl">
      {/* Border Radius */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-800">Border Radius</h2>
        <div className="flex items-center space-x-8">
          {borderRadius.map((radius) => (
            <div key={radius} className={`${baseStyle} ${radius} border-2`}>
              {radius}
            </div>
          ))}
        </div>
      </div>

      {/* Border Width */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-800">Border Width</h2>
        <div className="flex items-center space-x-8">
          {borderWidths.map((width) => (
            <div key={width} className={`${baseStyle} ${width} border-gray-900`}>
              {width}
            </div>
          ))}
        </div>
      </div>

      {/* Border Style */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-800">Border Style</h2>
        <div className="flex items-center space-x-8">
          {borderStyles.map((style) => (
            <div key={style} className={`${baseStyle} border-4 ${style} border-gray-900`}>
              {style}
            </div>
          ))}
        </div>
      </div>

      {/* Box Shadows */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-800">Box Shadows</h2>
        <div className="flex items-center space-x-8">
          {boxShadows.map((shadow) => (
            <div key={shadow} className={`${baseStyle} bg-white ${shadow}`}>
              {shadow}
            </div>
          ))}
        </div>
      </div>

      {/* Shadow Colors */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-800">Shadow Colors</h2>
        <div className="flex items-center space-x-8">
          {shadowColors.map((color) => (
            <div key={color} className={`${baseStyle} shadow-lg ${color}`}>
              {color}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ShadowsBorders.propTypes = {
  /**
   * Content to display inside the ShadowsBorders component
   */
  children: PropTypes.node,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

ShadowsBorders.defaultProps = {
  children: '',
  className: '',
};

export default ShadowsBorders;
