import React, { useEffect } from 'react'
import addToCart from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'

export default function Cart(props) {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    const productId = props.match.params.id
    const qty = props.location.search ? Number( props.location.search.split("=")[1]) :1
    const dispatch = useDispatch()

    useEffect(() => {
        
        if(productId){
            dispatch( addToCart(productId, qty))
        }
    }, [])
    return (
        <div className="cart">
            Cart Page
            <div className="cart-list">
                <div className="cart-container">
                    <ul>
                        <li> 
                            <h3> Shopping Cart </h3>
                            <div> Price </div>
                            {cartItems.length === 0 ? <div> The cart is empty </div> :
                            cartItems.map(item => 
                                <div> 
                                    <div> <img src={item.image} alt={item.name}/></div>
                                    <div> {item.name} </div>
                                    <div>
                                        <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <div> 
                                        <div> {item.price} </div> 
                                    </div>                                  
                                </div> )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cart-action">
              
            </div>
        </div>
    )
}
