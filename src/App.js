import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import WelcomeImg from './components/images/Fresh_Folk_Strolling.png'
import CreateImg from './components/images/Allura_Exploring_on_Laptop.png'
import FieldImg from './components/images/Allura_Working_Remotely.png'
import NotesImg from './components/images/Sitting_On_Floor.png'

function App() {
  return (
    <div className='AppContainer'>
      <div className='App'>
        <Header />
        {/* <hr></hr> */}

        <div className='welcomeContainer'>
          <div className='welcomeLeft'>
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='logInBtn'>Get Started</button>
          </div>

          <div className='welcomeRight'>
            <img src={WelcomeImg} alt='' title='' width='220px' height='220px'/>
          </div>
        </div>
      </div>

        <section className='sectionOneContainer'>
          <div className='sectionOne'>
            <img src={CreateImg} alt='' title='' />
            <h4>Create an Atlas</h4>
          </div>
        </section>

        <section className='sectionTwoContainer'>
          <div className='sectionTwo'>
            <h4>Take it to the field</h4>
            <img src={FieldImg} alt='' title='' />
          </div>
        </section>

        <section className='sectionOneContainer'>
          <div className='sectionOne'>
            <img src={NotesImg} alt='' title='' />
            <h4>Capture your notes</h4>
          </div>
        </section>
      

        <Footer />
    </div>
  );
}

export default App;