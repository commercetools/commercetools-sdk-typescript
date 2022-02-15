import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import NavBar from './component/Nav.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import ProductList from './component/ProductList.jsx'
import Details from './component/Details.jsx'
import Cart from './component/Cart.jsx'
import store from '../store'
import Login from './component/Login.jsx'
import Merge from './component/Merge.jsx'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <Provider store={store} className="app">
            <Routes>
                <Route path="*" element={<NavBar />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<ProductList />} />
                <Route path="/details" element={<Details />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Merge" element={<Merge />} />
            </Routes>
        </Provider>
    )
}

export default App;
