import { ADD_TO_CART } from "../constants/cartConstants"

const CartReducer = ( state= {cartItems:[]}, action) => {
    switch(action.type){
        case ADD_TO_CART :
            const item = action.payload
            const product = state.cartItems.find( x => x.product=== item.product)
             // product 가 cart 안에 있다면,  payload 를 return 해서 state update.
            if (product) {
                return {...state, cartItems: state.cartItem.map( x => x.product=== product.product? item : x)}
            } return {...state, cartItems: [...state.cartItems, item ] }
            // product 가 cart 안에 없으면...? 엥 왜 아이템 여기 들어가는거쥐????? 
        default:
            return state
    }
}
export {CartReducer}


