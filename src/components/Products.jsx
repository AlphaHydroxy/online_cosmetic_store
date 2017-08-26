import React from 'react'
import Brands from './Brands.jsx';

export default class Products extends React.Component {
  render(props) {
    return(
      <div className="products-list">
        <h1>{this.props.title}</h1>
        <Brands brandName="almay" title="Almay"/>
        <Brands brandName="annabelle" title="Annabelle" />
        <Brands brandName="benefit" />
        <Brands brandName="covergirl" />
        <Brands brandName="dalish" />
        <Brands brandName="essie" />
        <Brands brandName="iman" />
        <Brands brandName="l'oreal" />
        <Brands brandName="marcelle" />
        <Brands brandName="maybelline" />
        <Brands brandName="milani" />
        <Brands brandName="misa" />
        <Brands brandName="mistura" />
        <Brands brandName="moov" />
        <Brands brandName="nyx" />
        <Brands brandName="orly" />
        <Brands brandName="pacifica" />
        <Brands brandName="revlon" />
        <Brands brandName="sante" />
        <Brands brandName="smashbox"/>
        <Brands brandName="stila"/>
        <Brands brandName="suncoat"/>
        <Brands brandName="zorah"/>
      </div>
      );
  }
}