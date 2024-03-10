// import './styles.css';
// import logo from '../../assets/img/Pereira-logo.png'
// import { CartWidget } from '../CartWidget';
// import { NavLink } from 'react-router-dom';


// const NavBar = () => {

//     return (
//         <nav className="navBar">
//             <a href="/"> <img src={logo} alt="logo" className='max-w-[12vw] '/></a>
           

//             <ul className='flex items-center'>
//                 <li className='px-4'>
//                     <NavLink
//                         to={"/"}
//                         className={({isActive}) => (isActive ? "text-amber-200" : "")}
//                         >
//                             All Products
//                     </NavLink>
             
//                 </li>
//                 <li className='px-4'>
//                     <NavLink
//                         to={"/contact"}
//                         className={({isActive}) => (isActive ? "text-amber-200" : "")}
//                         >
//                             Contact
//                     </NavLink>
             
//                 </li>
                
//                 <CartWidget />
//             </ul>
//         </nav>
//     )
// }

// export { NavBar }


// import React, { useState, useEffect } from 'react';
// import './styles.css';
// import logo from '../../assets/img/Pereira-logo.png';
// import { CartWidget } from '../CartWidget';
// import { NavLink } from 'react-router-dom';

// const NavBar = () => {
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const offset = window.scrollY;
//             if (offset > 0) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <nav className={`navBar ${scrolled ? 'scrolled' : ''}`}>
//             <a href="/">
//                 <img src={logo} alt="logo" className={`max-w-[12vw] ${scrolled ? 'scrolledLogo' : ''}`} />
//             </a>

//             <ul className='flex items-center'>
//                 <li className='px-4'>
//                     <NavLink
//                         to={"/"}
//                         className={({ isActive }) => (isActive ? "text-amber-200" : "")}
//                     >
//                         All Products
//                     </NavLink>
//                 </li>
//                 <li className='px-4'>
//                     <NavLink
//                         to={"/contact"}
//                         className={({ isActive }) => (isActive ? "text-amber-200" : "")}
//                     >
//                         Contact
//                     </NavLink>
//                 </li>
//                 <CartWidget />
//             </ul>
//         </nav>
//     );
// };

// export { NavBar };


import React, { useState, useEffect } from 'react';
import './styles.css';
import logo from '../../assets/img/Pereira-logo.png';
import { CartWidget } from '../CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navHeight, setNavHeight] = useState(180); // Altura inicial do NavBar
    const SCROLL_THRESHOLD = 100; // Limiar de rolagem para ativar a transição

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > SCROLL_THRESHOLD) {
                setScrolled(true);
                setNavHeight(80); // Altura reduzida do NavBar
            } else {
                setScrolled(false);
                setNavHeight(180); // Altura original do NavBar
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navBar ${scrolled ? 'scrolled' : ''}`} style={{ height: `${navHeight}px` }}>
            <a href="/">
                <img src={logo} alt="logo" className={`logo ${scrolled ? 'scrolledLogo' : ''}`} />
            </a>

            <ul className='flex items-center'>
                <li className='px-4'>
                    <NavLink
                        to={"/"}
                        className={({ isActive }) => (isActive ? "text-amber-200" : "")}
                    >
                        All Products
                    </NavLink>
                </li>
                <li className='px-4'>
                    <NavLink
                        to={"/contact"}
                        className={({ isActive }) => (isActive ? "text-amber-200" : "")}
                    >
                        Contact
                    </NavLink>
                </li>
                <CartWidget />
            </ul>
        </nav>
    );
};

export { NavBar };