import logo from './logo.png';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './contact';
import Login from './login';
import NavBar from './navbar';
import Membership from './membership';
import Donate from './donate';
import Footer from './footer';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
     <div className='content'>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/membership">
          <Membership/>
        </Route>
        <Route path="/donate">
          <Donate/>
        </Route>
       


      </Switch>
     </div>

     <Footer/>
    </div>
    </Router>
  );
}

export default App;
