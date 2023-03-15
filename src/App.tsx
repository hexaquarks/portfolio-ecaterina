import './App.css';

import Navbar from './components/navbar/Navbar'
import Cover from './components/cover/Cover'
import Services from './components/services/MyServices'
import FormComponent from './components/form/FormComponent'
import Footer from './components/footer/Footer'
import Territory from './components/territory/Territory'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Services />
      <Territory />
      <FormComponent />
      <br/>
      <Footer />
    </div>
  );
}

export default App;
