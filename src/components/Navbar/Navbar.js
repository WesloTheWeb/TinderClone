import React from 'react';
import { whiteLogo, colorLogo } from '../../assets/index';
import classes from './Navbar.module.scss';

const { logo, logoContainer, navButton } = classes;

const Navbar = ({ minimal, authToken }) => {

    return (
        <nav>
            <div className={logoContainer}>
                {/* <img className={logo} src={minimal ? tinderLogo : whiteLogo} alt="tinder logo" /> */}
                {colorLogo}
            </div>
            {!authToken ? <button className={navButton}>Log in</button> : <button className={navButton}>Log out</button>}
        </nav>
    );
};

export default Navbar;