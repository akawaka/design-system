// src/components/ProductCard.jsx

import PropTypes from 'prop-types';

/**
 * Product Card component for displaying product details
 */
export const ProductCard = ({ image, title, description, price, onAddToCart }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-xs">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">{price}</span>
        <button
          onClick={onAddToCart}
          className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  /**
   * Image URL of the product
   */
  image: PropTypes.string.isRequired,
  /**
   * Title of the product
   */
  title: PropTypes.string.isRequired,
  /**
   * Description of the product
   */
  description: PropTypes.string.isRequired,
  /**
   * Price of the product
   */
  price: PropTypes.string.isRequired,
  /**
   * Callback function when the "Add to Cart" button is clicked
   */
  onAddToCart: PropTypes.func,
};

ProductCard.defaultProps = {
  onAddToCart: undefined,
};

export default ProductCard;
