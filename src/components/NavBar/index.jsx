import './styles.css';
import logo from '../../assets/img/Pereira-logo.png'
import { CartWidget } from '../CartWidget';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

    return (
        <nav className="navBar">
            <img src={logo} alt="logo" className='max-w-[12vw]' />

            <ul className='flex items-center'>
                <li className='px-4'>
                    <NavLink
                        to={"/"}
                        className={({isActive}) => (isActive ? "text-amber-200" : "")}
                        >
                            All Products
                    </NavLink>
             
                </li>
                <li className='px-4'>
                    <NavLink
                        to={"/contact"}
                        className={({isActive}) => (isActive ? "text-amber-200" : "")}
                        >
                            Contact
                    </NavLink>
             
                </li>
                
                <CartWidget />
            </ul>
        </nav>
    )
}

export { NavBar }
