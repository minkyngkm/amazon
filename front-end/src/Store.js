import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk  from 'redux-thunk'
import { productListReducer } from './reducer/ProductReducer'

const initialState = {}
const reducer = combineReducers({
    productList : productListReducer,
})
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducer, initialState, composeEnhancer( applyMiddleware(thunk) ) )

export default store