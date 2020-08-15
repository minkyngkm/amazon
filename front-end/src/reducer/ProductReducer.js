import { PRODUCT_LIST_REQUST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/Constants"

function productListReducer( state = { products : [] } , action ) {
    switch( action.type ){
        case PRODUCT_LIST_REQUST:
        return { loading: true }
        case PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL: 
        return { loading: false, products: action.payload }
        default: 
        return state
    }
}
function productDetailsReducer( state = { product : {} } , action ) {
    switch( action.type ){
        case PRODUCT_DETAILS_REQUEST:
        return { loading: true }
        case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL: 
        return { loading: false, product: action.payload }
        default: 
        return state
    }
}
export { productListReducer, productDetailsReducer}

// initial state 는 product : [] 
// action.type 이 맞는 케이스에 따라서 return 
// action.type 이 request 일때는 loading 이 true, sucess 일 경우 state 가 action 객체의 payload property 로 바뀐다! 