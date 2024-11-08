import PropTypes from "prop-types";

const LeftImageRightTextSection = ({ imageSrc, imageAlt, children, fullWidthImage = false }) => {
  return (
    <div className="py-24 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto xl:mx-0 xl:max-w-none xl:grid-cols-2">
          <div className="xl:ml-auto">
            <div className="xl:max-w-xl">
              {children}
            </div>
          </div>
          <div className="flex items-center xl:order-first">
            <img
              src={imageSrc}
              alt={imageAlt}
              className={`${fullWidthImage ? 'w-full h-full object-cover' : 'w-[24rem] max-w-none rounded-xl'} `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

LeftImageRightTextSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  fullWidthImage: PropTypes.bool,
};

export default LeftImageRightTextSection;
