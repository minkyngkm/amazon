import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Pages/Home';
import Products from './Pages/Products'

function App() {
  return (
   <BrowserRouter>
      <div className="grid-container">
        <header className="header">
            <div className="logo">
                <Link to="/"> Amazon</Link>
            </div>
            <div className="header-link">
                <a href="index.html">Cart</a>
                <a href="index.html">Sign-in</a>
            </div>
            
        </header>
        <main className="main">
            <Route path="/" exact component={Home}></Route>
            <Route path="/products/:id" component={Products}></Route>
            
        </main>
        <footer className="footer">
            All right reserved
        </footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
