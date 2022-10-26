import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Aquisition from './Pages/Aquisition';
import Product from './Pages/Product';
import GlobalProvider from './contex/GlobalProvider';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="app">
      <GlobalProvider>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/cart" component={ Cart } />
          <Route exact path="/aquisition" component={ Aquisition } />
          <Route exact path="/product/:id" component={ Product } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </GlobalProvider>
    </div>
  );
}

export default App;
