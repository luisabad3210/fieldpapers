import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'

import Home from './components/pages/home'
import About from './components/pages/about'
import Create from './components/pages/create'
import Tools from './components/pages/tools'
import Upload from './components/pages/upload'
import Watch from './components/pages/watch'

function App() {
  return (
    <Router>
      <div className='AppContainer'>
        {/* <div className='App'> */}
          <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/create' component={Create}/>
          <Route path='/tools' component={Tools}/>
          <Route path='/uploads' component={Upload}/>
          <Route path='/watch' component={Watch}/>
        </Switch>
        {/* </div> */}
          <Footer />
      </div>
    </Router>
  );
}

export default App;