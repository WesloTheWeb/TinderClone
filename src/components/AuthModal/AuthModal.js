import React from 'react';
import classes from './AuthModal.module.scss';

const { authModal } = classes;

const AuthModal = ({ handeClick }) => {
    return (
        <section className={authModal}>
            <form>
                <h2>Create an account</h2>
                <button onClick={handeClick}>Close</button>
            </form>
        </section>
    );
};


export default AuthModal;