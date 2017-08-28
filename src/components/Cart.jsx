import React from 'react';
import PropTypes from 'prop-types';

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
    debugger;
      var totalPrice = currentBasket.map(makeup => makeup.price).reduce((a, b) => { return parseFloat(a) + parseFloat(b); }, 0);
      console.log(totalPrice);
      const makeUpDetails = currentBasket.map((makeUp, index) => {
          return (
              <h5>{makeUp.name}</h5>
            );
      });
      return (
        <div>
          {makeUpDetails}
        </div>
        )
    }

    // return (
    //   <div className = "bank-box">
    //     <h1>{this.props.title}</h1>
    //     <div>Cart total = {this.state.total}</div>
    //     <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange.bind(this)} />
    //     <button onClick={ () => {this.addToCart()} }>Add</button>
    //     <button onClick={ () => {this.removeFromCart()} }>Remove</button>
    //   </div>
    //   );
  // }
}

Cart.propTypes = {
  title: PropTypes.string.isRequired
}

export default Cart;