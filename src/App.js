import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarData from './Components/NavbarData/NavbarData';
import ContextProvider from './Components/Store/ContextProvider';
import About from './Pages/AboutPage/About';
import Home from './Pages/HomePage/Home';
import StorePage from './Pages/StorePage/StorePage';
import Contactus from './Pages/ContactPage/Contactus';
import ProductPage from './Pages/ProductPage/ProductPage';
import AuthPage from './Pages/Auth/AuthPage';
import NotFound from './Pages/NotFound';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <ContextProvider>
      <Router>
        <NavbarData />
        <Switch>
          <Route exact path="/E-Commerce" component={Home} />
          <Route path="/E-Commerce/about" component={About} />
          <Route path="/E-Commerce/store" component={StorePage} />
          <Route path="/E-Commerce/contactus" component={Contactus} />
          <Route path="/E-Commerce/productpage/:id" component={ProductPage} />
          <Route path="/E-Commerce/auth" component={AuthPage} />
          <Route component={NotFound} />
        </Switch>
        <footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
