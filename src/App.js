import Carouseldata from './Components/CarouselData/Carouseldata';
import NavbarData from './Components/NavbarData/NavbarData';
import Productsdata from './Components/Products/Productsdata';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <NavbarData/>
      <Carouseldata/>
      <Productsdata/>
      <Footer/>
    </div>
  );
}

export default App;
