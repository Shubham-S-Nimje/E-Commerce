import NavbarData from './Components/NavbarData/NavbarData';
import Footer from './Components/Footer/Footer';
import ContextProvider from './Components/Store/ContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/AboutPage/About';
import Home from './Pages/HomePage/Home';
import StorePage from './Pages/StorePage/StorePage';
import Contactus from './Pages/ContactPage/Contactus';
import ProductPage from './Pages/ProductPage/ProductPage';

const router = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/about', element: <About/>},
  {path: '/store', element: <StorePage/>},
  {path: '/contactus', element: <Contactus/>},
  {path: '/productpage/:id', element: <ProductPage/>},
])
function App() {
  return (
    <ContextProvider>
      <NavbarData/>
      <RouterProvider router={router}/>

      {/* <Route path="/contactus">
        <Contactus/>
      </Route> */}

      <Footer/>
    </ContextProvider>
  );
}

export default App;
