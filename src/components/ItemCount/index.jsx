import { useContext, useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import AppContext from '../../context/AppContext';


const ItemCount = (product) => {
    // Inicializa o estado da quantidade de itens com 1
    const [quantity, setQuantity] = useState(1);
    const { cartItems, setCartItems } = useContext(AppContext);


    // Função para aumentar a quantidade
    const increaseQuantity = () => {
  
        setQuantity(quantity + 1);
    
    };

    // Função para diminuir a quantidade
    const decreaseQuantity = () => {

        setQuantity(quantity - 1);

    };

    const addToCart = () => {
        const updatedCartQuantity = cartItems + quantity; // Define uma variável para verificar o número total de itens no carrinho
        if (updatedCartQuantity >= 0) {
            setCartItems(updatedCartQuantity);
        } else {
            setCartItems(0); // Define como 0 se a quantidade for negativa
        }
        setQuantity(1); // Reseta a quantidade para 1 após adicionar ao carrinho
        // console.log('cartItems', cartItems)
        // console.log('quantity', quantity)
        // console.log('updatedCartQuantity', updatedCartQuantity)
    }

    return (
        <div className="pt-4 text-center">
            <div className="text-2xl text-amber-200 text-base font-semibold m-2">Quantity:</div>
            <div className="flex justify-center space-x-6 mb-4">
                <button
                    onClick={decreaseQuantity}
                    className={`text-teal-800 ${quantity === 1 ? 'text-gray-300 cursor-not-allowed' : ''
                        }`}
                >
                    <MinusCircleIcon className="w-6" />
                </button>
                <span className="text-xl text-white font-semibold">{quantity}</span>
                <button onClick={increaseQuantity} className="text-teal-800">
                    <PlusCircleIcon className="w-6" />
                </button>
            </div>
            <button
                onClick={addToCart}
                className="bg-teal-800 text-amber-200 font-semibold rounded-md p-2 hover:bg-teal-900"
            >
                Add to cart
            </button>
        </div>
    );
};

export { ItemCount };

