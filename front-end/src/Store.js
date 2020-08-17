import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk  from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducer/ProductReducer'
import { CartReducer } from './reducer/cartReducer'

const initialState = {}
const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : CartReducer
})
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducer, initialState, composeEnhancer( applyMiddleware(thunk) ) )

export default store