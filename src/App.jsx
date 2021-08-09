import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Works from './components/Works';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Presentation />
      <br></br>
      <Works />
      <br></br>
      <Contact />
    </div>
  );
};

export default App;