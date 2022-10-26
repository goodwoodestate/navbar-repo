import React, { useState } from 'react';
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MenuData } from './MenuData';
import './NavBar.css';

function NavBar() {
    const [sidebar, setSidebar] = useState(false)
    const [megamenu, setMegaMenu] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    const megaMenu = () => {
        setMegaMenu(!megamenu)
    }

    return (
        <>
            <div className="navbar">
                <div>
                {/* BURGER DIV */}
                <Link to="#" className='menu-bars'>
                    <FaBars onClick={showSidebar} className="m-4 text-3xl text-white" />
                </Link>
                </div>
                <div className='my-2'>
                    <a href="#" className='text-white text-5xl title my-2 uppercase'>Goodwood</a>
                </div>
                <div>
                    <button className='bg-black border-2 w-20 m-3 text-base border-custom-green text-white'>
                        Shop
                    </button>
                    <button className='bg-custom-green w-20 m-3 text-lg text-black'>
                        Book
                    </button>
                    <i className="fa-solid fa-magnifying-glass text-2xl text-white m-3"></i>
                    <button className='text-white m-3'>
                        Sign In
                    </button>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars ml-8 text-3xl'>
                            <FaTimesCircle className='m-4 text-3xl text-white' />
                        </Link>
                    </li>
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index} className={ item.cName }>
                                <Link to={item.url}>
                                    <span className='text-white'>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                </div>
                <div className='flex'>
                <div className='text-white min-w-full'>
                    THIS IS EVENT CONTAINER 1
                </div>
                <div className='text-white min-w-full'>
                    THIS IS EVENT CONTAINER 1
                </div>
                <div className='text-white min-w-full'>
                    THIS IS EVENT CONTAINER 1
                </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar;