import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useCallback, memo, useRef,useEffect,useMemo } from "react";
import { store } from './app/store';
import { Provider } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux';
import { addUser } from './userSlice';
import Slider from '@mui/material/Slider';
import Register from './pages/Register';
import Loginuser from './pages/Loginuser';
import { Dashboard } from './pages/Dashboard/Dashboard';

import { Products } from './pages/Products/Products';
import { Cart } from './pages/Cart/Cart'
import { MyProducts } from './pages/MyProducts/Myproducts';
import ProtectedRoute from './routes/Protectedroutes';
import Layout from './components/Layout';
import  Resetpassword from './pages/Resetpassword'

function App() {


 
 return (
  <BrowserRouter>
  <Routes>
   <Route path="/login" element={<Loginuser />} />
   <Route path="/register" element={<Register />} />
   <Route path="/resetpassword" element={<Resetpassword />}/>

        <Route path="/" element={
          <ProtectedRoute>
            <Layout/>
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="my-products" element={<MyProducts />} />
          <Route path="cart" element={<Cart />} />
        </Route>

      </Routes></BrowserRouter>

    
  )

}
export default App
