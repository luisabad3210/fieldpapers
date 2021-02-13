import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <section className='footerContainer'>
            <div className='footer'>
                {/* <h1>Field Papers</h1> */}
                {/* <Header /> */}

                <h2>Field Papers</h2>
                <div className='footerBtnContainer'>
                    <Link to='/about'>
                    <button className='footerBtn'>About</button>
                    </Link>

                    <Link to='/create'>
                        <button className='footerBtn'>Create</button>
                    </Link>

                    <Link to='/uploads'>
                        <button className='footerBtn'>Upload</button>
                    </Link>

                    <Link to='/watch'>
                        <button className='footerBtn'>Watch</button>
                    </Link>

                    <Link to='/tools'>
                        <button className='footerBtn'>Tools</button>
                    </Link>

                    <Link to='/help'>
                        <button className='footerBtn'>Help</button>
                    </Link>

                    {/* <Link to='/login'> */}
                    <button className='logInBtn'>Login</button>
                    {/* </Link> */}
                </div>

                <p>
                    Field Papers is built by Stamen Design
                </p> 
                <p>
                    Map data © OpenStreetMap contributors, Toner by Stamen, Bing by Microsoft, Mapbox, or a combination thereof
                </p>
                
                <p>
                    Dansk Deutsch English Español Français Bahasa Indonesia Italiano 日本語 کوردی Nederlands Polski Português ру́сский Kiswahili Tagalog Українська tiếng Việt 普通话 國語
                </p>
                
                <p>
                    Development Blog GitHub Issues Translations
                </p>
            </div>
        </section>
    )
}

export default Footer;