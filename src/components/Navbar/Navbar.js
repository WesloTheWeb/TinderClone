import React from 'react';
import { colorLogo, whiteLogo } from '../../assets/index';
import classes from './Navbar.module.scss';

const { navButton } = classes;

const Navbar = ({ minimal, authToken }) => {

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo} alt="tinder logo" />
            </div>
            {!authToken ? <button className={navButton}>Log in</button> : <button className={navButton}>Log out</button>}
        </nav>
    );
};

export default Navbar;