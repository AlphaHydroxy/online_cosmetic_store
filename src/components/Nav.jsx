import React from 'react';
import { Link } from 'react-router-dom'
import Cart from './Cart.jsx'
import '../css/nav.css'

export default class Nav extends React.Component {
  render(props){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/"><a className="navbar-brand">MakeApp</a></Link>
          <button 
              className="navbar-toggler" 
              type="button" data-toggle="collapse" 
              data-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              <li className="nav-item active">
                <a className="nav-link"><Link to="products">Products</Link></a>
              </li>

              <li className="nav-item active">
                <a className="nav-link"><Link to="bestsellers">Best Sellers</Link></a>
                </li>

              <li className="nav-item active">
                <a className="nav-link"><Link to="getintouch">Get In Touch</Link></a>
              </li>

              <li className="nav-item active">
                <a className="nav-link"><Link to="login">Log In</Link></a>
              </li>

              <li className="nav-item active">
                <a className="nav-link"><Link to="search">Search</Link></a>
              </li>

            </ul>
            <Cart />
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>

        </nav>
        
      </div>
      );
  }

}



// <Products title="Products"/>
// <BestSellers />
// <GetInTouch />
// <LogIn />
// <Search />
// <ShoppingBasket />