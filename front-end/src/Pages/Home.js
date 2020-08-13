import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Home() {
    const [ products , setProducts ] = useState([])
    useEffect(() => {
        const fetchData = async () => {
           const {data} = await axios.get("/api/products");
           setProducts(data)
        }
        fetchData();
        return () => {
            
        }
    }, [])

    return (
        <div>
            Home Page
        
            <ul className="products">
                {/* data file 대신에 이제 서버에서 데이터를 불러옴  */}
                {products.map( product => (
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
