import NavbarData from './Components/NavbarData/NavbarData';
import ContextProvider from './Components/Store/ContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/AboutPage/About';
import Home from './Pages/HomePage/Home';
import StorePage from './Pages/StorePage/StorePage';
import Contactus from './Pages/ContactPage/Contactus';
import ProductPage from './Pages/ProductPage/ProductPage';
import AuthPage from './Pages/Auth/AuthPage';

const router = createBrowserRouter([
  {path: '/E-Commerce', element: <Home/>},
  {path: '/E-Commerce/about', element: <About/>},
  {path: '/E-Commerce/store', element: <StorePage/>},
  {path: '/E-Commerce/contactus', element: <Contactus/>},
  {path: '/E-Commerce/productpage/:id', element: <ProductPage/>},
  {path: '/E-Commerce/auth', element: <AuthPage/>},
])
// const router = createBrowserRouter([
//   {path: '/', element: <Home/>},
//   {path: '/about', element: <About/>},
//   {path: '/store', element: <StorePage/>},
//   {path: '/contactus', element: <Contactus/>},
//   {path: '/productpage/:id', element: <ProductPage/>},
//   {path: '/auth', element: <AuthPage/>},
// ])
function App() {
  return (
    <ContextProvider>
      <NavbarData/>
      <RouterProvider router={router}/>

      {/* <Route path="/contactus">
        <Contactus/>
      </Route> */}

      <footer/>
    </ContextProvider>
  );
}

export default App;
