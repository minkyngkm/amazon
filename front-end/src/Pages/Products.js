import React, { useEffect, useState } from 'react'
// import data from '../data'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Detailproducts } from '../actions/ProductActions'

export default function Products( props ) {
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( Detailproducts(props.match.params.id) )
        return () => {
           //
        }
    }, [])
    // console.log(product)
    const handleAddToCart = () =>{
        props.history.push('/cart/'+ props.match.params.id + '?qty='+ qty)
    }

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
                    <li>Status : {product.countInStock > 0 ? "available" : "Out of stock" }</li>
                    <li> Quantity 
                        <select value={qty} onChange={ e => setQty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map( x => 
                            <option key={x+1} value={x+1}> {x+1} </option> )}
                        </select>
                    </li>
                    <li>
                            {product.countInStock > 0 && <button onClick={handleAddToCart}>Add to Cart</button> }

                    </li>
                </ul>
            </div>
        </div>}
    </div>
    )
}
