import { useState } from "react"
import AppContext from "./AppContext"
import propTypes from 'prop-types'

const Provider = ({children}) => {

    const [cartItems, setCartItems] = useState(0);

    const value = {
        cartItems,
        setCartItems
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