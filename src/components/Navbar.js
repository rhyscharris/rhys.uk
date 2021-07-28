import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click); {/* makes it a toggle. ! makes it opposite of current value */}
    const closeMobileMenu = () => setClick(false);

    /*const showButton = () => { {/* shows button depending on screen width *}
        if(window.innerWidth<=960) {
            setButton(false);
        } else {
            setButton(true);
        }
        }*/
    /*useEffect(() => {
        showButton()
    }, []); /* makes sure button renders once. Otherwise, if refreshing, hidden button appears*/


    /*window.addEventListener('resize', showButton);*/

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}> {/* calls the handleClick method above */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/* on click, toggle class between these two icons */}
                    </div>
                    <Link to='/' className='navbar-logo mobile-only' onClick={closeMobileMenu}>
                        RH
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
                        <Link to='/' className='navbar-logo desktop-only'>
                        RH
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