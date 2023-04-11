import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Model from './components/pages/Model';
import Perpetual from './components/pages/Perpetual';
import Quiz from './components/pages/Quiz';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/model' component={Model} />
          <Route path='/perpetual' component={Perpetual} />
          <Route path='/quiz' component={Quiz} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
