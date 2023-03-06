import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar'
import Cover from './components/cover/Cover'
import Description from './components/description/Description'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Description />
    </div>
  );
}

export default App;
