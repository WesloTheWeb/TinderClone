import React from 'react';
import { tinderLogo1, tinderLogo2 } from '../../assets/index';
import classes from './Navbar.module.scss';

const { logo } = classes;

const Navbar = (props) => {

    const minimal = true;

    return (
        <nav>
            <div>
                <img className={logo} src={minimal ? tinderLogo1 : tinderLogo2} alt="tinder logo" />
            </div>
        </nav>
    );
};

export default Navbar