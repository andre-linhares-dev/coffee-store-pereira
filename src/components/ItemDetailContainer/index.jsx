import { XCircleIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const ItemDetailContainer = ({ product, onClose }) => {
    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
    
        // Adicionando o event listener quando o componente é montado
        document.addEventListener('keydown', handleKeyPress);
    
        // Removendo o event listener quando o componente é desmontado
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [onClose]);
    return (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

            <div className="modal-container bg-white w-11/12 min-w-min md:max-w-md max-h-full mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                <div onClick={onClose} className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
                    <XCircleIcon  width="42" height="42" viewBox="0 0 24 24"/>
                    <span className="text-sm">(Press esc)</span>
                </div>

               
                <div className="modal-content py-4 px-6">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">{product.name}</p>
                        <div onClick={onClose} className="modal-close cursor-pointer z-50">
                            <XCircleIcon className="text-black " width="24" height="24" viewBox="0 0 24 24" />
                        </div>
                    </div>
                    <div className="flex-col justify-center align-center">
                    <p className="text-gray-700">{product.description}</p>
                    <img src={product.image_url} alt={product.name}/>

                    <p className="text-gray-700"><span className="font-black">Region:</span> {product.region}</p>
                    <p className="text-gray-700"><span className="font-black">Weight:</span> {product.weight} grams</p>
                    <p className="text-gray-700"><span className="font-black">Flavor Profile:</span> {product.flavor_profile.join(', ')}</p>
                    <p className="text-gray-700"><span className="font-black">Grind Option:</span> {product.grind_option.join(', ')}</p>
                    <p className="text-gray-700"><span className="font-black">Roast Level:</span> {product.roast_level}</p>
                    <p className="text-gray-700"><span className="font-black">Price:</span> ${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ItemDetailContainer };
