import React from 'react';
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import Checkout from './Components/Checkout';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name, price, quantity) => {
    let newItems = []
    let index = -1;

    for(let i = 0; i < cartItems.length; i++) {
      if(cartItems[i].name === name && cartItems[i].price === price) {
        index = i;
      }
    }

    if(index === -1) {
      setCartItems([...cartItems, {name: name, price: price, quantity: quantity}]);
    } else {
      newItems = [...cartItems.slice(0, index), {name: name, price: price, quantity: cartItems[index].quantity + quantity}, ...cartItems.slice(index + 1)];
      setCartItems(newItems);
    }
  }

  const removeFromCart = (name) => {
    setCartItems(cartItems.filter(item => item.name !== name));
  }

  const emptyCart = () => {
    setCartItems([]);
  }

  return (
    <div className="App">
      <HashRouter>
        <Navbar itemCount={cartItems.map((item => item.quantity)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} itemCount={cartItems.map((item => item.quantity)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} emptyCart={emptyCart} />} />
          <Route path="/checkout" element={<Checkout></Checkout>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
