import Carouseldata from './Components/CarouselData/Carouseldata';
import NavbarData from './Components/NavbarData/NavbarData';
import Productsdata from './Components/Products/Productsdata';

function App() {
  return (
    <div className="container">
      <NavbarData/>
      <Carouseldata/>
      <Productsdata/>
    </div>
  );
}

export default App;
