import React from 'react'
import data from '../data'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            Home Page
        
            <ul className="products">
                {data.products.map( product => (
                  <li key={product.id}>
                  <div className="product"> 
                   <div className="product-img">
                   <Link to={`/products/${product.id}`}>
                       <img src="https://cdn.pixabay.com/photo/2014/05/18/11/26/shoes-346986_1280.jpg" alt="running shoes"></img>
                    </Link>

                   </div>
                   <div className="product-name"> <Link to={`/products/${product.id}`}>{product.name}</Link></div>
                   <div className="product-brand"> {product.brand} </div>
                   <div className="product-price"> {product.price} </div>
                   <div className="product-raiting"> {product.rating}</div>
                 </div>
               </li>
                ))}
            </ul>
        </div>
    )
}
