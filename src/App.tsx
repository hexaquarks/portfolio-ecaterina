import React from 'react';
import './App.css';
import { Background, Parallax } from 'react-parallax';

import Navbar from './components/navbar/Navbar'
import Cover from './components/cover/Cover'
import Description from './components/description/Description'
import FormComponent from './components/form/FormComponent'

import placeholder from "./assets/image-placeholder.jpg"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Parallax className="parallax" strength={700}>
        <Cover />
      </Parallax>
      <Description />
      <FormComponent />
    </div>
  );
}

export default App;
