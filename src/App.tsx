import './App.css';

import { DarkModeProvider } from './util/DarkModeContext';

import Navbar from './components/navbar/Navbar'
import Cover from './components/cover/Cover'
import Services from './components/services/MyServices'
import FormComponent from './components/form/FormComponent'
import Footer from './components/footer/Footer'
import Territory from './components/territory/Territory'

const App = () => {
  return (
    <DarkModeProvider>
    <div className="App">
      <Navbar />
      <Cover />
      <Services />
      <Territory />
      <FormComponent />
      <Footer />
    </div>
    </DarkModeProvider>
  );
}

export default App;
