
import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
   <>

    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact Component={Home}/>

      </Switch>
    </Router>





   </>
  );
}

export default App;
