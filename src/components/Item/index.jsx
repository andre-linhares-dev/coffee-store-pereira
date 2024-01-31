import PropTypes from 'prop-types';
import { ItemCount } from '../ItemCount';


const Item = ({ product }) => {
  return (
    <div className="bg-teal-950 shadow-md rounded-3xl pl-6 pr-6 pb-6  flex flex-col items-center justify-between h-full">
      <img src={product.image_url} alt={product.name} className="w-60 h-80 object-cover" />
      <h3 className="text-amber-200 text-xl font-semibold mt-2">{product.name}</h3>
      <p className="text-white">{product.description}</p>
      <p className="text-amber-200 font-bold text-lg mt-2">${product.price}</p>
      <div className="mt-4">
        <ItemCount />
      </div>
    </div>
  );
};

Item.propTypes = {
    product: PropTypes.shape({
      image_url: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
  };

export {Item} ;