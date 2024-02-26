import PropTypes from 'prop-types';
import { ItemCount } from '../ItemCount';
import { useState } from 'react';
import { ItemDetailContainer } from '../ItemDetailContainer';
import { NavLink } from 'react-router-dom';




const Item = ({ product }) => {
  const [showDetail, setShowDetail] = useState(false);


  const handleItemClick = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  if (!product) {
    return <div>Carregando...</div>; // ou qualquer outro indicador de carregamento desejado
  }

  return (
    <div>

      {/* Renderização do item aqui */}
      <div className="bg-teal-950 shadow-md rounded-3xl pl-6 pr-6 pb-6  flex flex-col items-center justify-between h-full" >
        {/* <div className='cursor-pointer flex flex-col items-center' to={`/product/${product.id}> */}
        <NavLink className='cursor-pointer flex flex-col items-center' onClick={handleItemClick}   >
          <img src={product.image_url} alt={product.name} className="w-60 h-80 object-cover" />
          <h3 className="text-amber-200 text-xl font-semibold mt-2">{product.name}</h3>
          <p className="text-white">{product.description}</p>
          <p className="text-amber-200 font-bold text-lg mt-2">${product.price}</p>
        {/* </div> */}
        </NavLink>
        <div className="mt-4">
          <ItemCount />
        </div>
      </div>

      {showDetail && (
        <ItemDetailContainer product={product} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

// <div className="bg-teal-950 shadow-md rounded-3xl pl-6 pr-6 pb-6  flex flex-col items-center justify-between h-full">
//   <img src={product.image_url} alt={product.name} className="w-60 h-80 object-cover" />
//   <h3 className="text-amber-200 text-xl font-semibold mt-2">{product.name}</h3>
//   <p className="text-white">{product.description}</p>
//   <p className="text-amber-200 font-bold text-lg mt-2">${product.price}</p>
//   <div className="mt-4">
//     <ItemCount />
//   </div>
// </div>
//   );
// };

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    image_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export { Item };