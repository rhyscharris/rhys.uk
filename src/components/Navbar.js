import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import {ReactComponent as ReactLogo} from './logo.svg';

function Navbar(props) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click); {/* makes it a toggle. ! makes it opposite of current value */}
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <a href='#main-content' className='skip-nav-link'>Skip navigation</a>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}> {/* calls the handleClick method above */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/* on click, toggle class between these two icons */}
                    </div>
                    <Link to='/' className='navbar-logo mobile-only' onClick={closeMobileMenu}>
                    </Link>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}> {/* if true, make it active and manu class, if fales, make it just menu */}
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}> {/* once clicked, call function to close the mobile menu */}
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/design' className='nav-links' onClick={closeMobileMenu}> {/* once clicked, call function to close the mobile menu */}
                                Design
                            </Link>
                        </li>
                        <Link to='/#' className='navbar-logo desktop-only'>
                            <ReactLogo />
                        </Link>
                        <li className='nav-item'>
                            <Link to='/coding' className='nav-links' onClick={closeMobileMenu}> {/* once clicked, call function to close the mobile menu */}
                                Coding
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cv' className='nav-links' onClick={closeMobileMenu}> {/* once clicked, call function to close the mobile menu */}
                                CV
                            </Link>
                        </li>
                    </ul>
                    {/*{button && <Button buttonStyle='btn--outline'>TEST</Button>}*/}
                </div>
            </nav>
        </>
    )
}

export default Navbar
