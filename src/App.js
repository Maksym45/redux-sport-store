import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Input from './input/input';
import Main from './Components/Main/Main';
import FiltredProducts from './Components/FiltredProducts/FiltredProducts';
import SingleProduct from './Components/FiltredProducts/SingleProduct';
import './App.css';
import Login from './Components/Login/Login';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.user);
  const {authUser} = user;
  console.log('user', user);
  console.log('authUser', authUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ authUser ? <Main /> : <Login />} />
          <Route path="/input" element={<Input />} />
          <Route path="/filteredProducts/:type" element={<FiltredProducts />} />
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
