import React, { Component } from 'react';

const urlForBrandName = brandName =>
  `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
  render() {
    if(!this.state.makeUpData) {
      
      // console.log("render");
      return <p>loading</p>;
    }
    console.log(this.state);
    const makeUpDetails = this.state.makeUpData.map((makeUp, index) => {
        return (
          <div key={index}>
            <p>{makeUp.brand} - {makeUp.name}</p>
            <img src={makeUp.image_link} alt={makeUp.name} />
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