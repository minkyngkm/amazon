import axios from 'axios'
import { PRODUCT_LIST_REQUST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../constants/Constants'

const ListProducts = () =>  async ( dispatch ) => {
    try{
        dispatch( {type : PRODUCT_LIST_REQUST})
        const { data } = await axios.get('api/products')
        dispatch( {type : PRODUCT_LIST_SUCCESS, payload: data })
    } catch(error){
        dispatch( {type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}

const Detailproducts = (productId) => async ( dispatch ) => {
    try{
        dispatch( {type : PRODUCT_DETAILS_REQUEST, payload: productId })
        const { data } = await axios.get('http://localhost:3000/api/products/'+ productId )
        dispatch( {type : PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch(error){
        dispatch( {type: PRODUCT_DETAILS_FAIL, payload: error.message })
    }
}
export { ListProducts, Detailproducts }