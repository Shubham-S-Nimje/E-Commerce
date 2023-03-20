import NavbarData from './Components/NavbarData/NavbarData';
import Footer from './Components/Footer/Footer';
import ContextProvider from './Components/Store/ContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import StorePage from './Pages/StorePage/StorePage';
import Contactus from './Pages/ContactPage/Contactus';

const router = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/about', element: <About/>},
  {path: '/store', element: <StorePage/>},
  {path: '/contactus', element: <Contactus/>},
])
function App() {
  return (
    <ContextProvider>
    <div className="container">
      <NavbarData/>
      <RouterProvider router={router}/>
      <Footer/>
    </div>
    </ContextProvider>
  );
}

export default App;
