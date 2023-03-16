import './App.css';
import Carouseldata from './Components/CarouselData/Carouseldata';
import NavbarData from './Components/NavbarData/NavbarData';
import Productsdata from './Components/Products/Productsdata';

function App() {
  return (
    <div className="App container">
      <NavbarData/>
      <Carouseldata/>
      <div className='row'>
      <Productsdata/>
      </div>
    </div>
  );
}

export default App;
