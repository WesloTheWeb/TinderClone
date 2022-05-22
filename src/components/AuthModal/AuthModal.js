import React from 'react';
import SignUpForm from '../../containers/SignUpForm/SignUpForm';
import classes from './AuthModal.module.scss';

const { authModal } = classes;

const AuthModal = ({ handleClick, isSignUp }) => {
    return (
        <section className={authModal}>
            <div>
                {isSignUp ? <h2>Create an account</h2> : <h2>Log in</h2>}
                <p>By clicking <b>{isSignUp ? 'Create Account' : 'Log In'}</b>, you argree to our terms. Learn how we process your data
                    in our Privacy Policy page.
                </p>
                <SignUpForm handleClick={handleClick} isSignUp={isSignUp} />
            </div>
        </section>
    );
};

export default AuthModal;