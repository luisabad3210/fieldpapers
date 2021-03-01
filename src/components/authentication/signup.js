import React from 'react';
import { Link } from 'react-router-dom';
import signupImg from '../images/Allura_Freelancing.png'

const Signup = () => {
    return (
        <section className='aboutSectionContainer2'>
            <div className='aboutSection'>
                <h1>
                    Create an Account
                </h1>
                Username:
                <div><input className='searchInput'></input></div>
                <div>Email:</div>
                <div><input className='searchInput'></input></div>
                <div>Password:</div>
                <div><input className='searchInput'></input></div>
                <div>Confirm Password:</div>
                <div><input className='searchInput'></input></div>

                <div><button className='logInBtn'>Sign Up</button></div>

                <Link to='/Login'>
                    <a>Log In</a>
                </Link>
                <div>Forgot Password?</div>
                <div>Didnt recieve confirmation instructions</div>
            </div>
        </section>
    )
}

export default Signup