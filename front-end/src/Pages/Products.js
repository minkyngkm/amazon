import React from 'react'
import data from '../data'
import {Link} from 'react-router-dom'

export default function Products( props ) {
    const item = data.products.find( x => x.id === props.match.params.id)
    console.log(item)
    return (
        <div>
            <div className="back-link">
                <Link to="/"> Back to Result </Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={item.image} alt={item.name}></img>
                </div>
                <div className="details-info">
                    <h1>{item.name}</h1>
                    <p> {item.description}</p>
                    <p>{item.rating}</p>
                </div>
                <div className="details-action "> 
                <ul>
                    <li>Price : ${item.price} </li>
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
        </div>
    </div>
    )
}
