import React from 'react';
import SignUpForm from '../../containers/SignUpForm/SignUpForm';
import { smallLogo } from '../../assets';
import classes from './AuthModal.module.scss';

const { authModal, exitBtn } = classes;

const AuthModal = ({ handleClick, isSignUp, setShowModal }) => {
    return (
        <section className={authModal}>
            <div>
                <div className={exitBtn}
                    onClick={() => setShowModal(false)} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                {smallLogo}
                {isSignUp ? <h2>Create Account</h2> : <h2>Log in</h2>}
                <p>By clicking <b>{isSignUp ? 'Create Account' : 'Log in'}</b>, you agree to our terms. Learn how we process your data
                    in our Privacy Policy page.
                </p>
                <SignUpForm
                    handleClick={handleClick}
                    isSignUp={isSignUp}
                    setShowModal={setShowModal}
                />
            </div>
        </section>
    );
};

export default AuthModal;