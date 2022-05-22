import React from 'react';

const Overlay = ({ handleClick }) => {
    return (
        <div onClick={handleClick}
            className='modal-overlay'>
        </div>
    );
};


export default Overlay;