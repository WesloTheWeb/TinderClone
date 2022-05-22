import { React, useState } from 'react';

const SignUpForm = ({ handleClick }) => {

    const isSignUp = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!"')
    }
    
    return (
        <form  >

            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClick}>Close</button>
        </form>
    );
};


export default SignUpForm;