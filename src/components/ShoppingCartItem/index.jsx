import AppContext from "../../context/AppContext";
import { useContext } from 'react'

const ShoppingCartItem = ({ product, quantity }) => {
    const { shoppingCartItems, setShoppingCartItems } = useContext(AppContext);


    const handleRemoveItem = () => {
        const itemIndex = shoppingCartItems.findIndex(item => item.product.id === product.id);

        if (itemIndex !== -1) {
            // Cria uma cópia do carrinho atual
            const updatedCartItems = [...shoppingCartItems];
            // Decrementa a quantidade do item no carrinho
            updatedCartItems[itemIndex].quantity -= 1;
            // Remove o item do carrinho se a quantidade for menor ou igual a zero
            if (updatedCartItems[itemIndex].quantity <= 0) {
                updatedCartItems.splice(itemIndex, 1);
            }
            // Atualiza o estado do carrinho com os itens atualizados
            setShoppingCartItems(updatedCartItems);
        }
    };



    return (
        <section>
            <div className="flex ">

                <div className="container-shopping-cart min-w-[80vw] flex items-center  h-full">

                    <img
                        src={product.image_url}
                        alt="imagem do produto"
                        className="shopping-cart-item-image w-60 h-[50vh] object-cover"
                    />
                    <div className="shopping-cart-item flex justify-between w-96  items-center">

                        <div className="shopping-cart-item-content text-start">
                            <h3 className="text-amber-200 text-xl font-semibold mt-2" >{quantity}x {product.name}</h3>
                            <h3 className="text-white font-bold text-l mt-1 mb-5"> ${quantity*product.price} ({quantity}x ${product.price}) </h3>
                        <button onClick={handleRemoveItem}
                            type="button"
                            className="button_remove-item h-10 bg-teal-800 text-amber-200 font-semibold rounded-md p-2 hover:bg-teal-900"
                        >
                            Remove item
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { ShoppingCartItem }