import { useContext, useState } from "react";
import { ShoppingCartItem } from "../ShoppingCartItem";
import AppContext from "../../context/AppContext";
import { CheckCircleIcon } from "@heroicons/react/24/solid";



function ShoppingCart() {

    const { shoppingCartItems, setShoppingCartItems } = useContext(AppContext);
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);

    // Função para calcular o preço total do carrinho
    const calculateTotalPrice = () => {

        let totalPrice = 0;
        shoppingCartItems.forEach(item => {
            totalPrice += item.product.price * item.quantity;
        });
        return totalPrice;
    };

    const handleCheckout = () => {
        // Limpar o carrinho e marcar a compra como concluída
        setShoppingCartItems([]);
        setPurchaseCompleted(true);
    };

    return (
        <section className="pt-[220px]">
            <h1 className="flex justify-center mb-6 font-bold text-5xl font-headers text-teal-950">Shopping Cart Resume</h1>
            <div className="mx-[20vw] mb-10 flex flex-col rounded-3xl bg-teal-950 justify-center">
                {shoppingCartItems.map((shoppingCartItem) => (
                    <ShoppingCartItem key={shoppingCartItem.id} quantity={shoppingCartItem.quantity} product={shoppingCartItem.product} />
                ))}
                <h3 className="text-center text-white font-bold my-3">
                    Total: ${calculateTotalPrice()}
                </h3>
                {shoppingCartItems.length > 0 && !purchaseCompleted && (
                    <button
                        type="button"
                        className="button_remove-item h-10 bg-teal-800 text-amber-200 font-semibold rounded-md p-2 hover:bg-teal-900"
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                )}
                {purchaseCompleted && (
                    <div className="flex flex-row align-center justify-center">
                        <p className="text-center text-lg text-green-500 font-bold my-3">Compra finalizada!</p>
                        <CheckCircleIcon className="ml-1 w-7 flex justify-center text-green-400 animate-pulse" />
                    </div>
                )}
            </div>
        </section>
    );
}

export { ShoppingCart };