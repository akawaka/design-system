// src/components/ProductCard.jsx

import PropTypes from 'prop-types';

export const ProductCard = ({ image, title, description, price, onAddToCart }) => {
  return (
    <div className="max-w-xs p-4 border rounded-lg shadow-md">
      <img src={image} alt={title} className="object-cover w-full h-48 mb-4 rounded-md" />
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">{price}</span>
        <button
          onClick={onAddToCart}
          className="px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func,
};

ProductCard.defaultProps = {
  onAddToCart: undefined,
};

export default ProductCard;
