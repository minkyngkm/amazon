import axios from 'axios'
import { PRODUCT_LIST_REQUST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/Constants'

const ListProducts = async ( dispatch ) => {
    try{
        dispatch( {type : PRODUCT_LIST_REQUST})
        const { data } = await axios.get('api/products')
        dispatch( {type : PRODUCT_LIST_SUCCESS, payload: data })
    } catch(error){
        dispatch( {type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}

export { ListProducts }