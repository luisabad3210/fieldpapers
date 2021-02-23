import React from 'react';
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <div className='headerContainer'>
            <Link to='/'>
                <button className='logo'><h2>Field Papers</h2></button>
            </Link>

            <Link to='/about'>
                <button className='headerBtn'>About</button>
            </Link>

            <Link to='/create'>
                <button className='headerBtn'>Create</button>
            </Link>

            <Link to='/uploads'>
                <button className='headerBtn'>Upload</button>
            </Link>

            <Link to='/watch'>
                <button className='headerBtn'>Watch</button>
            </Link>

            <Link to='/tools'>
                <button className='headerBtn'>Tools</button>
            </Link>

            <Link to='/login'>
            <button className='logInBtn'>Login</button>
            </Link>
        </div>
    )
}

export default Header;