import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'
import '../sass/cart.css'

class Cart extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      amount: 0
    }
  }

  addToCart() {
    this.setState((prevState) => {
      return {total: prevState.total + this.state.amount};
    });
  }

  removeFromCart() {
    this.setState((prevState) => {
      return {total: prevState.total - this.state.amount};
    });
  }

  handleChange(event) {
    this.setState({
      amount: parseInt(event.target.value)
    });
  }

  render() {
      var currentBasket = JSON.parse(localStorage.getItem('basketItems'));
        var totalPrice = currentBasket.map(makeup => makeup.price).reduce((a, b) => { return parseFloat(a) + parseFloat(b); }, 0);
        
        var numOfItems = currentBasket.length;

        const makeUpDetails = currentBasket.map((makeUp, index) => {
            return (
                <h5>{makeUp.name}</h5>
              );
        });
        return (
          <div className="cart-container">
            <p className="item-count">{numOfItems}</p>
  
            <FontAwesome
                    data-toggle="modal"
                    data-target="#show-cart"
                    className='cart-icon'
                    name='shopping-cart'
                    size='2x'
                    // spin
                  />
            <div className="modal fade" id="show-cart" tabIndex="-1">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    
                    <button>Checkout</button>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        )
    }
}

Cart.propTypes = {
  title: PropTypes.string.isRequired
}

export default Cart;
