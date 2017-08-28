import { fromJS } from 'immutable'
import fetch from 'isomorphic-fetch'
import { isEmpty } from 'lodash'

export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_QUERY = 'SET_QUERY'

export function setProducts (products) {
  return {
    type: SET_PRODUCTS,
    payload: products
  }
}

export function setQuery (query) {
  return {
    type: SET_QUERY,
    payload: query
  }
}

export const getProducts = (query) => {
  return (dispatch, getState) => {
    dispatch(setQuery(query))
    !isEmpty(query) ? fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + query)
    .then(response => {
      if(response.status >= 400) {
        throw new Error('Server error')
      }
      return response.json()
    }).then(products => {
      dispatch(setProducts(products.items))
    }).catch(error => {
      console.log(error)
    }) : dispatch(setProducts([]))
  }
}

export const action = {
  getProducts
}

const ACTION_HANDLERS ={
  [SET_PRODUCTS]: (state, {payload: products}) => {
    return state.set('products', fromJS(products))
  },
  [SET_QUERY]: (state, {payload: query}) => {
    return state.set('query', fromJS(query))
  }
}

const initialState = fromJS({})
export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}