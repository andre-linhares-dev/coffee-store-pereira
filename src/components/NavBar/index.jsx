import './styles.css';
import logo from '../../assets/img/Pereira-logo.png'
const NavBar = () => {

    return (
        <nav className="navBar">
            <img src={logo} alt="logo" className='max-w-[12vw]' />
            <ul className='flex items-center'>
                <li className='px-4'><a href="/">Home</a></li>
                <li className='px-4'><a href="/">Products</a></li>
                <li className='px-4'><a href="/">Contact</a></li>
            </ul>
        </nav>
    )
}

export { NavBar }
