import axios from "axios"
import { ADD_TO_CART } from "../constants/cartConstants"

const addToCart = ( productId, qty ) =>  (dispatch) => {
    try{
        const {data} = axios.get("/api/products/" + productId)
        dispatch(
            {
                type: ADD_TO_CART,
                payload: {
                    product: data.id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    countInStock : data.countInStock,
                    qty
                }
            }
        )
    }
    catch(e){
    
    }
}


export default addToCart