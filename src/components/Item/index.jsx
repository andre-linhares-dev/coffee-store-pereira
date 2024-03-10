import PropTypes from 'prop-types';
// import { ItemCount } from '../ItemCount';
import { useState } from 'react';
import { ItemDetailContainer } from '../ItemDetailContainer';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Ícone do sinal visual quando clica em add to cart


const Item = ({ product }) => {
  const [showAddedIndicator, setShowAddedIndicator] = useState(false);
  const { shoppingCartItems, setShoppingCartItems } = useContext(AppContext);
  const [showDetail, setShowDetail] = useState(false); 

  const handleAddToCart = () => {
    addToCart();
    setShowAddedIndicator(true);

    // Tempo limite para remover o indicador de adição
    setTimeout(() => {
      setShowAddedIndicator(false);
    }, 500); // Tempo em milissegundos (0,5 segundos)
  };
  const addToCart = () => {
    if (!product || !product.id) {
      console.error("Product or product id is undefined");
      return;
    }

    const existingItemIndex = shoppingCartItems.findIndex(item => item.product.id === product.id);

    if (existingItemIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedCartItems = [...shoppingCartItems];
      updatedCartItems[existingItemIndex].quantity += 1; // Increase quantity
      setShoppingCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setShoppingCartItems(prevItems => [...prevItems, { product, quantity: 1 }]);
    }
    console.log(shoppingCartItems.length);
    console.log(shoppingCartItems);
  };


  const handleItemClick = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };


  return (
    <div>

      <div className="bg-teal-950 hover:bg-emerald-950 shadow-md rounded-3xl pl-6 pr-6 pb-6  flex flex-col items-center justify-between h-full" >
        <NavLink className='cursor-pointer flex flex-col items-center' onClick={handleItemClick}  >
          <img src={product.image_url} alt={product.name} className="w-60 h-80 object-cover" />
          <h3 className="text-amber-200 text-xl font-semibold mt-2">{product.name}</h3>
          <p className="text-white text-center">{product.description}</p>
          <p className="text-amber-200 font-bold text-lg mt-2">${product.price}</p>
        </NavLink>
        <div className="mt-4">
          <button onClick={handleAddToCart}  className=" flex align-center bg-teal-800 text-amber-200 font-semibold rounded-md p-2 hover:bg-teal-900">Add to cart  {showAddedIndicator && (
            <div className="flex items-center align-center justify-center mt-[1.8px]">
              <CheckCircleIcon className="ml-1 w-5 align-center text-amber-200 animate-pulse" />
            </div>
          )}</button>
        </div>
      </div>

      {showDetail && (
        <ItemDetailContainer product={product} onClose={handleCloseDetail} />
      )}
    </div>
  );
};


Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export { Item };
