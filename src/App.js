import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'

import Home from './components/pages/home'
import About from './components/pages/about'
import Create from './components/pages/create'
import Tools from './components/pages/tools'
import Upload from './components/pages/upload'
import Watch from './components/pages/watch'
import Help from './components/pages/help'
import Login from './components/authentication/login'
import Signup from './components/authentication/signup'

function App() {
  return (
    <Router>
      <div className='App'>

        <Header />

        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/create' component={Create}/>
          <Route path='/tools' component={Tools}/>
          <Route path='/uploads' component={Upload}/>
          <Route path='/watch' component={Watch}/>
          <Route path='/help' component={Help}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;