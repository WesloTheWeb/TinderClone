import React from 'react';
import SignUpForm from '../../containers/SignUpForm/SignUpForm';
import { smallLogo } from '../../assets';
import classes from './AuthModal.module.scss';

const { authModal } = classes;

const AuthModal = ({ handleClick, isSignUp, setShowModal }) => {
    return (
        <section className={authModal}>
            <div>
                {smallLogo}
                {isSignUp ? <h2>Create an account</h2> : <h2>Log in</h2>}
                <p>By clicking <b>{isSignUp ? 'Create Account' : 'Log In'}</b>, you argree to our terms. Learn how we process your data
                    in our Privacy Policy page.
                </p>
                <SignUpForm handleClick={handleClick} isSignUp={isSignUp} setShowModal={setShowModal} />
            </div>
        </section>
    );
};

export default AuthModal;