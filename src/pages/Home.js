import { React, useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {

    const [authToken, isAuthToken] = useState(true);

    const handleClick = () => {
        console.log('Clicked');
    }

    useEffect(() => {
        isAuthToken(true);
    }, []);

    return (
        <>
            <Navbar />
            <div>
                <h1 className="home">Swipe Right</h1>
                <button className="primary-button" onClick={handleClick}>
                    {
                        authToken ? 'Signout' : 'Create Account'
                    }
                </button>
            </div>
        </>
    );
};


export default Home;