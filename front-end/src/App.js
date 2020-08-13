import React from 'react';
import './App.css';
import data from './data'

function App() {
  return (
    <div className="grid-container">
        <header className="header">
            <div className="logo">
                <a href="index.html">Amazon</a>
            </div>
            <div className="header-link">
                <a href="index.html">Cart</a>
                <a href="index.html">Sign-in</a>
            </div>
            
        </header>
        <main className="main">
            <ul class="products">
                {data.product.map( product => (
                  <li>
                  <div class="product"> 
                   <div class="product-img">
                     <img src="https://cdn.pixabay.com/photo/2014/05/18/11/26/shoes-346986_1280.jpg" alt="running shoes"></img>
                   </div>
                   <div class="product-name"> <a href="#"> {product.name} </a> </div>
                   <div class="product-brand"> {product.brand} </div>
                   <div class="product-price"> {product.price} </div>
                   <div class="product-raiting"> {product.rating}</div>
                 </div>
               </li>
                ))}
            </ul>
        </main>
        <footer className="footer">
            All right reserved
        </footer>
    </div>
  );
}

export default App;
