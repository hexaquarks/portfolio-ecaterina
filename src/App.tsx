import './App.css';

import Navbar from './components/navbar/Navbar'
import Cover from './components/cover/Cover'
import Services from './components/services/MyServices'
import FormComponent from './components/form/FormComponent'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Services />
      <FormComponent />
      <br/>
      <Footer />
    </div>
  );
}

export default App;
