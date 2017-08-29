import React, { Component } from 'react';

const urlForBrandName = brandName =>
  `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.buy = this.buy.bind(this);
  }
  componentDidMount() {
    fetch(urlForBrandName(this.props.brandName))
    .then(data => data.json())
    .then(data => {
      this.setState({
        makeUpData: data
      })
      //console.log(data[0].brand);
    })
  }
  
  buy(makeUpItem){
    var currentBasket = JSON.parse(localStorage.getItem('basketItems'));
    if(!currentBasket){
      currentBasket = [];
    } 

    console.log(currentBasket);
    currentBasket.push(makeUpItem);
    localStorage.setItem('basketItems', JSON.stringify(currentBasket));
  }
  render() {
    if(!this.state.makeUpData) {
      
      // console.log("render");
      return <img src="../../public/favicon.png" alt="loading... " />;
    }
    const makeUpDetails = this.state.makeUpData.map((makeUp, index) => {
        return (
          <div className="container">
            <div className="row mymodal">
          <div className="product-item" key={index}>
            <h5>{makeUp.name}</h5>
            <img className="product-img" src={makeUp.image_link} alt={makeUp.name} />
            <p>£{makeUp.price}</p>
            <p>{makeUp['product_colors'].hex_value}</p>
            <p>{makeUp['product_colors'].colour_name}</p>
            <button className="btn btn-sm" data-toggle="modal" data-target={'#' + makeUp.id}>more...</button>

            <div className="modal fade" id={makeUp.id} tabIndex="-1">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5>{makeUp.name}</h5>
                    <img className="product-img" src={makeUp.image_link} alt={makeUp.name} />
                    <p>{makeUp.description}</p> 
                    <p>£{makeUp.price}</p>
                    <button className="btn btn-primary" onClick={() => this.buy(makeUp)}> Add to cart! </button>
                    </div>
                  </div>
                </div>
              </div>



            <hr/>
          </div>
          </div>
          </div>
          );
    });
    return (
      <div>
        {makeUpDetails}
      </div>
      )
  }
}

export default Brands;