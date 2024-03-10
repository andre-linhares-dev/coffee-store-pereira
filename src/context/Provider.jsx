import { useContext, useState } from "react"
import AppContext from "./AppContext"
import propTypes from 'prop-types'

const Provider = ({ children }) => {

    const [cartItems, setCartItems] = useState(0);
    const [shoppingCartItems, setShoppingCartItems] = useState([])



    const value = {
        cartItems,
        setCartItems,
        shoppingCartItems,
        setShoppingCartItems,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export { Provider }



Provider.propTypes = {
    children: propTypes.any,
}.isRequired
