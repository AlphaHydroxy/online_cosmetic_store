import React from 'react'
import GetProducts from './GetProducts.jsx';
import '../sass/products.css'

export default class Products extends React.Component {
  render() {
    return(
      <div className="products-list">
        <GetProducts brandName="almay" key="almay"/>
        <GetProducts brandName="annabelle" key="annabelle" />
        <GetProducts brandName="benefit" key="benefit"/>
        <GetProducts brandName="covergirl" key="covergirl"/>
        <GetProducts brandName="dalish" key="dalish"/>
        <GetProducts brandName="essie" key="essie"/>
        <GetProducts brandName="l'oreal" key="l'oreal"/>
        <GetProducts brandName="marcelle" key="marcelle"/>
        <GetProducts brandName="maybelline" key="maybelline"/>
        <GetProducts brandName="milani" key="milani"/>
        <GetProducts brandName="misa" key="misa"/>
        <GetProducts brandName="mistura" key="mistura"/>
        <GetProducts brandName="moov" key="moov"/>
        <GetProducts brandName="nyx" key="nyx"/>
        <GetProducts brandName="orly" key="orly"/>
        <GetProducts brandName="pacifica" key="pacifica"/>
        <GetProducts brandName="revlon" key="revlon"/>
        <GetProducts brandName="sante" key="sante"/>
        <GetProducts brandName="smashbox" key="smashbox"/>
        <GetProducts brandName="stila" key="stila"/>
        <GetProducts brandName="suncoat" key="suncoat"/>
        <GetProducts brandName="zorah" key="zorah"/>
      </div>
      );
  }
}