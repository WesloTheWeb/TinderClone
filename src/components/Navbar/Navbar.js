import React from 'react';
import { colorLogo } from '../../assets/index';
import classes from './Navbar.module.scss';

const { logoContainer, navButton } = classes;

const Navbar = ({ minimal, authToken, setShowModal, setIsSignUp }) => {

    const handleNavBarClick = () => {
        setShowModal(true);
        setIsSignUp(false);
    }

    return (
        <nav>
            <div className={logoContainer}>
                {colorLogo}
            </div>
            {!authToken ? <button onClick={handleNavBarClick} className={navButton}>Log in</button> : <button className={navButton}>Log out</button>
            }
        </nav >
    );
};

export default Navbar;