import React from 'react'
import GetProducts from './GetProducts.jsx';
import '../sass/products.css'

export default class Products extends React.Component {
  render(props) {
    return(
      <div className="products-list">
        <GetProducts brandName="almay" />
        <GetProducts brandName="annabelle" />
        <GetProducts brandName="benefit" />
        <GetProducts brandName="covergirl" />
        <GetProducts brandName="dalish" />
        <GetProducts brandName="essie" />
        <GetProducts brandName="iman" />
        <GetProducts brandName="l'oreal" />
        <GetProducts brandName="marcelle" />
        <GetProducts brandName="maybelline" />
        <GetProducts brandName="milani" />
        <GetProducts brandName="misa" />
        <GetProducts brandName="mistura" />
        <GetProducts brandName="moov" />
        <GetProducts brandName="nyx" />
        <GetProducts brandName="orly" />
        <GetProducts brandName="pacifica" />
        <GetProducts brandName="revlon" />
        <GetProducts brandName="sante" />
        <GetProducts brandName="smashbox"/>
        <GetProducts brandName="stila"/>
        <GetProducts brandName="suncoat"/>
        <GetProducts brandName="zorah"/>
      </div>
      );
  }
}