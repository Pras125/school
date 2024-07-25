// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js/index.js';
import About from './components/About.js/index.js';
import Academics from './components/Academics.js/index.js';
import Admissions from './components/Admissions.js/index.js';
import Faculty from './components/Faculty.js/index.js';
import Students from './components/Students.js/index.js';
import Gallery from './components/Gallery.js/index.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/academics" component={Academics} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/faculty" component={Faculty} />
          <Route path="/students" component={Students} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

