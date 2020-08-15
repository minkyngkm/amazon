import React, { useEffect } from 'react'
// import data from '../data'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Detailproducts } from '../actions/ProductActions'

export default function Products( props ) {
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    const dispatch = useDispatch()
    console.log( product )
    useEffect(() => {
        dispatch( Detailproducts(props.match.params.id) )
        return () => {
           //
        }
    }, [])
    console.log(product)

    // const product = data.products.find( x => x.id === props.match.params.id)

    return (
        
        <div>
            <div className="back-link">
                <Link to="/"> Back to Result </Link>
            </div>
            {loading ? <div>loading...</div> : error ? <div> {error} </div> :
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt={product.name}></img>
                </div>
                <div className="details-info">
                    <h1>{product.name}</h1>
                    <p> {product.description}</p>
                    <p>{product.rating}</p>
                </div>
                <div className="details-action "> 
                <ul>
                    <li>Price : ${product.price} </li>
                    <li> Quantity 
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li><button>Add to Cart</button></li>
                </ul>
            </div>
        </div>}
    </div>
    )
}
