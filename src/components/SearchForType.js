import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Search = (props) => {
  const {getProducts, products, query } = props
  const mappedProducts = !products.isEmpty() ? products.map((product, index) => {
    const id = product.get('id')
    const name = product.get('')
  }) : <h4>No results found</h4>
  return (
    <div className="search-box">
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Search make up by type</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            favourites
          </div>
          <div className="col-md-8">
            <div className="form-group">
              <input type="text" className="form-control" id="search" placeholder="Search for make up type" value={query} onChange={({target}) => getProducts(target.value)} />
            </div>
          </div>
          <div>
            make up goes here
          </div>
        </div>
      </section>
    </div>

  )
}

Search.propTypes = {
  getProducts: PropTypes.func,
  products: PropTypes.any,
  query: PropTypes.string
}

export default Search