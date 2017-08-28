import { connect } from 'react-redux'
import { getProducts } from './searchtype.js'
import { fromJS } from 'immutable'
import SearchForType from './SearchForType.js'

const actions = {
  getProducts: (value) => getProducts(value)
}

const mapStateToProps = (state) => {
  const search = state.search
  return {
    products: search.get('products', fromJS([])),
    query: search.get('query', '')
  }
}

export default connect(mapStateToProps, actions)(SearchTypeContainer)