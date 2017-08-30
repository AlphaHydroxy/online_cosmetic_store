import React from 'react';
import Cart from './Cart.jsx'
import '../sass/nav.css'

export default class Nav extends React.Component {
  render(props){
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
        <a href="/"className="navbar-brand">MakeApp</a>
          <button 
              className="navbar-toggler" 
              type="button" data-toggle="collapse" 
              data-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <div className="hamburger"></div>
              <div className="hamburger"></div>
              <div className="hamburger"></div>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              <li className="nav-item active">
                <a href="products"className="nav-link">Products</a>
              </li>

              <li className="nav-item active">
                <a href="bestsellers" className="nav-link">Best Sellers</a>
                </li>

              <li className="nav-item active">
                <a href="getintouch" className="nav-link">Get In Touch</a>
              </li>

              <li className="nav-item active">
                <a href="login" className="nav-link">Log In</a>
              </li>

              <li className="nav-item active">
                <a href="search" className="nav-link">Search</a>
              </li>
            </ul>

              <Cart />

          </div>

        </nav>
        
      </div>
      );
  }

}

//            <form className="form-inline my-2 my-lg-0">
//              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
//              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//            </form>

// <Products title="Products"/>
// <BestSellers />
// <GetInTouch />
// <LogIn />
// <Search />
// <ShoppingBasket />