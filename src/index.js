import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import BestSellers from './components/BestSellers.jsx';
import GetInTouch from './components/GetInTouch.jsx';
import LogIn from './components/LogIn.jsx';
import SearchForType from './components/SearchForType.js';
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import registerServiceWorker from './registerServiceWorker';

render((
  <BrowserRouter>
  <div>
    <Nav />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/products' component={Products} />
      <Route path='/bestsellers' component={BestSellers} />
      <Route path='/getintouch' component={GetInTouch} />
      <Route path='/login' component={LogIn} />
      <Route path='/search' component={SearchForType} />
    </Switch>
    <Footer />
    </div>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
