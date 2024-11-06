import PropTypes from 'prop-types';

const Card = ({ children, backgroundColor = 'bg-white', ...props }) => {
  return (
    <div className={`w-full h-full overflow-hidden shadow-lg ${backgroundColor} rounded-xl`} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
};

export default Card;
