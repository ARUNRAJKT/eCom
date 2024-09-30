import { React, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { MenuItems } from './menuItems.js'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

export default function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>BIN ADVENTURE</h1>
            <div className='menu-icons'>
            <i onClick={handleClick}>
                    {clicked ? <CloseIcon /> : <HamburgerIcon />}
                </i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
              
                {MenuItems.map((item, index) => (
                    <li key={index}>   
                        <Link className={item.cName} to={item.url}>
                            {item.title}
                            </Link>
                    </li>
                ))}   
            </ul>
        </nav>
    )
}
