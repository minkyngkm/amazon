import React from 'react';
import './App.css';

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
            <ul>
                <li> Product 1</li>
                <li> Product 2</li>
                <li> Product 3</li>
                <li> Product 4</li>
                <li> Product 5</li>
            </ul>
        </main>
        <footer className="footer">
            All right reserved
        </footer>
    </div>
  );
}

export default App;
