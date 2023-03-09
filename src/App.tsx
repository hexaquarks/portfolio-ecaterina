import React from 'react';
import './App.css';
import { Background, Parallax } from 'react-parallax';

import Navbar from './components/navbar/Navbar'
import Cover from './components/cover/Cover'
import Services from './components/services/MyServices'
import FormComponent from './components/form/FormComponent'

import placeholder from "./assets/image-placeholder.jpg"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Parallax className="parallax" strength={700}>
        <Cover />
      </Parallax>
      <Services />
      <FormComponent />
    </div>
  );
}

export default App;
