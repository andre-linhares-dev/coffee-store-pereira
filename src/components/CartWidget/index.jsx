import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
    const { cartItems } = useContext(AppContext)
    return (

        <div className="">
            <NavLink
                to={"/checkout"}
                className={({ isActive }) => (isActive ? "text-amber-200" : "")}
            >
            

                <button className='flex items-center justify-center p-2 bg-transparent mx-4 relative'>
                    <ShoppingBagIcon className="h-7 w-7 text-amber-100" />
                    {cartItems >= 1 && <span className='bg-red-700 w-4 h-4 rounded-2xl absolute top-0 left-0 text-white font-medium text-xs flex items-center justify-center'>{cartItems}</span>}
                </button>
            </NavLink>
        </div>
    )
}

export { CartWidget } 