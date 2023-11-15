import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import PizzaShopAdmin from './components/PizzaShopAdmin'
import StartOrder from './components/StartOrder';
import Products from './components/Products';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const [email, setEmail] = useState("")


  return (

    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />

          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />

          <Route path="/pizzashopadmin" element={<PizzaShopAdmin setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          
          <Route path="/startorder" element={<StartOrder setLoggedIn={setLoggedIn} setEmail={setEmail} />} />

          <Route path="/products" element={<Products setLoggedIn={setLoggedIn} setEmail={setEmail} />} />

        </Routes>

      </BrowserRouter>

    </div>

  );

}


export default App;