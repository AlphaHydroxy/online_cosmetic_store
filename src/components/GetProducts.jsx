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
      // console.log(this.state.makeUpData.product_colors.hex_value);
      })
  }
  
  buy(makeUpItem){
    var currentBasket = JSON.parse(localStorage.getItem('basketItems'));
    if(!currentBasket){
      currentBasket = [];
    } 

    currentBasket.push(makeUpItem);
    localStorage.setItem('basketItems', JSON.stringify(currentBasket));
  }

  render() {
    if(!this.state.makeUpData) {
      return null;
    }
    const makeUpDetails = this.state.makeUpData.map((makeUp, index) => {
      const mappedColours =  makeUp.product_colors.map((colour, index) => {
        const divStyle = {
          width: '20px',
          height: '20px',
          backgroundColor: colour.hex_value
        };
        return (<div className="product-colour" style={divStyle}></div>);
      });
        return (
            <div className="row mymodal">
              <div className="product-item" key={index}>
                <h5>{makeUp.name}</h5>
                <img className="product-img" data-toggle="modal" data-target={'#' + makeUp.id} src={makeUp.image_link} alt={makeUp.name} />
                <p>£{makeUp.price}</p>
                <button className="btn btn-sm" onClick={() => this.buy(makeUp)}> Add to cart</button>

                <div className="modal fade" id={makeUp.id} tabIndex="-1">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="popout-header">{makeUp.name}</h5>
                        <img className="product-img" src={makeUp.image_link} alt={makeUp.name} />
                        <div className="product-colour-container">{mappedColours}</div>
                        <p className="product-description">{makeUp.description}</p> 
                        <p>£{makeUp.price}</p>
                        <button className="btn btn-primary" onClick={() => this.buy(makeUp)}> Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
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