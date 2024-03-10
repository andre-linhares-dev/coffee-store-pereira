import { useContext } from "react";
import { ShoppingCartItem } from "../ShoppingCartItem";
import AppContext from "../../context/AppContext";



function ShoppingCart() {

    const { shoppingCartItems } = useContext(AppContext);

    // Função para calcular o preço total do carrinho
    const calculateTotalPrice = () => {

        let totalPrice = 0;
        shoppingCartItems.forEach(item => {
            totalPrice += item.product.price * item.quantity;
        });
        return totalPrice;
    };

    return (
        <section className="pt-[220px]">
            <h1 className="flex justify-center mb-6 font-bold text-5xl font-headers text-teal-950">Shopping Cart Resume</h1>
            <div className="mx-[18vw] mb-10 flex flex-col rounded-3xl bg-teal-950 justify-center">
                <>
                    {shoppingCartItems.map((shoppingCartItem) => <ShoppingCartItem key={shoppingCartItem.id} quantity={shoppingCartItem.quantity} product={shoppingCartItem.product} />)}
                </>
                <>
                    <h3 className="text-center text-white font-bold my-3">
                        Total: ${calculateTotalPrice()}
                    </h3>
                    {shoppingCartItems.length > 0 && (
  <button
    type="button"
    className="button_remove-item h-10 bg-teal-800 text-amber-200 font-semibold rounded-md p-2 hover:bg-teal-900"
  >
    Checkout
  </button>
)}
                </>
            </div>
        </section>
    )
}

export { ShoppingCart };