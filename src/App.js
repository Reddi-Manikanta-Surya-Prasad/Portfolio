// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Home from './components/Home'; // Import the Home component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} /> {/* Add the Home route */}
          <Route path="/about" component={AboutMe} />
          <Route path="/experience" component={Experience} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={ContactMe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
