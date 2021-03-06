import React from 'react';
import WelcomeImg from '../images/Fresh_Folk_Strolling.png'
import CreateImg from '../images/Allura_Exploring_on_Laptop.png'
import FieldImg from '../images/Allura_Working_Remotely.png'
import NotesImg from '../images/Sitting_On_Floor.png'


const Home = () => {
    return (
        <div className='Home'>
          <div className='welcomeContainer'>
            <div className='welcomeLeft'>
              <h1>Welcome</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button className='logInBtn'>Get Started</button>
            </div>
  
            <div className='welcomeRight'>
              <img src={WelcomeImg} alt='' title='' width='200px' height='220px'/>
            </div>
          </div>
        {/* </div> */}
  
          <section className='sectionOneContainer'>
            <div className='sectionOne'>
              <div className='center'>
                <img src={CreateImg} alt='' title='' height='150px' width='250'/>
              </div>
  
              <div className='center'>
                <h2>Create an Atlas</h2>
                <p>Print out anywhere in the world.</p>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> */}
              </div>
            </div>
          </section>
  
          <section className='sectionTwoContainer'>
            <div className='sectionTwo'>
              <div className='center'>
                <h2>Take it to the field</h2>
                <p>Make your notes and observations.</p>
              </div>
  
              <div className='center'>
                <img src={FieldImg} alt='' title='' height='150px' width='250'/>
              </div>
            </div>
          </section>
  
          <section className='sectionOneContainer'>
            <div className='sectionOne'>
              <div className='center'>
                <img src={NotesImg} alt='' title='' height='230' width='230'/>
              </div>

              <div className='center'>
                <h2>Capture your notes</h2>
                <p>Upload pages you've photographed.</p>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> */}
              </div>
            </div>
          </section>
      </div>
    )
}

export default Home