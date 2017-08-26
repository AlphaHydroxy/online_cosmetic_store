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
import registerServiceWorker from './registerServiceWorker';

render((
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/home' component={Home} />
      <Route path='/products' component={Products} />
      <Route path='/bestsellers' component={BestSellers} />
      <Route path='/getintouch' component={GetInTouch} />
      <Route path='/login' component={LogIn} />
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
