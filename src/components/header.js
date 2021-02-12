import React from 'react';

const Header = () => {
    return (
        <div className='headerContainer'>
            <h2>Field Papers</h2>
            <button className='headerBtn'>About</button>
            <button className='headerBtn'>Create</button>
            <button className='headerBtn'>Upload</button>
            <button className='headerBtn'>Watch</button>
            <button className='headerBtn'>Tools</button>
            <button className='logInBtn'>Login</button>
        </div>
    )
}

export default Header;