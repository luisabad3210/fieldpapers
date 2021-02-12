import React from 'react';
// import Header from './header'

const Footer = () => {
    return (
        <section className='footerContainer'>
            <div className='footer'>
                {/* <h1>Field Papers</h1> */}
                {/* <Header /> */}

                <h2>Field Papers</h2>
                <div className='footerBtnContainer'>
                    <button className='footerBtn'>About</button>
                    <button className='footerBtn'>Create</button>
                    <button className='footerBtn'>Upload</button>
                    <button className='footerBtn'>Watch</button>
                    <button className='footerBtn'>Tools</button>
                    <button className='footerBtn'>Help</button>
                    <button className='logInBtn'>Login</button>
                </div>

                Field Papers is built by Stamen Design  /   About the Project  /   Help
                Map data © OpenStreetMap contributors, Toner by Stamen, Bing by Microsoft, Mapbox, or a combination thereof.Dansk Deutsch English Español Français Bahasa Indonesia Italiano 日本語 کوردی Nederlands Polski Português ру́сский Kiswahili Tagalog Українська tiếng Việt 普通话 國語Development Blog GitHub Issues Translations
            </div>
        </section>
    )
}

export default Footer;