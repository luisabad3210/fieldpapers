import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='aboutSectionContainer2'>
            <div className='aboutSection'>
                <h1>
                    Log In
                </h1>
                <div>Email:</div>
                <div><input className='searchInput'></input></div>
                <div>Password:</div>
                <div><input className='searchInput'></input></div>

                <div><button className='logInBtn'>Login</button></div>

                <Link to='/signup'>
                    <div>Sign Up</div>
                </Link>
                <div>Forgot Password?</div>
                <div>Didnt recieve confirmation instructions</div>
            </div>
        </section>
    )
}

export default Login