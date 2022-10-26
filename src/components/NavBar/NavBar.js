import './NavBar.css';
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <div className="bg-black m-0 flex justify-between">
                <div>
                    {/* BURGER DIV */}
                    <Link to="#" className='menu-bars'>
                        <FaBars className="m-4 text-3xl text-white" />
                    </Link>
                </div>
                <nav className={sidebar ?'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <FaTimesCircle />
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* TITLE DIV */}
                <div className='my-2'>
                <a href="#" className='text-white text-5xl title my-2 uppercase'>Goodwood</a>
                </div>
                {/* BUTTONS AND FORM DIV */}
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
        </header>
    )
}

export default NavBar;