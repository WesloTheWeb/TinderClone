import { React, useState, useEffect } from 'react';
import AuthModal from '../components/AuthModal/AuthModal';
import Navbar from '../components/Navbar/Navbar';
import Overlay from '../components/Overlay/Overlay';

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [authToken, isAuthToken] = useState(true);

    const handleClick = () => {
        console.log('Clicked');
        setShowModal(true);
    }

    useEffect(() => {
        isAuthToken(false);
    }, []);

    return (
        <>
            {showModal && (
                <>
                    <Overlay />
                    <AuthModal handleClick={handleClick} />
                </>
                )}
            <div className='overlay'>
                <Navbar minimal={true} authToken={authToken} />
                <div>
                    <h1 className="home">Swipe Right&reg;</h1>
                    <button className="primary-button" onClick={handleClick}>
                        {
                            authToken ? 'Signout' : 'Create Account'
                        }
                    </button>
                </div>
            </div>
        </>
    );
};


export default Home;