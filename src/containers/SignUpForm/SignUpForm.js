import { React } from 'react';

const SignUpForm = ({ handleClick, setShowModal }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!"')
        setShowModal(false);
    }
    
    return (
        <form  onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
            <button onClick={handleClick}>Close</button>
        </form>
    );
};

export default SignUpForm;