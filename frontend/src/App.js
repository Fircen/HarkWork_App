import React, { useState, } from 'react';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';
import { Link, Route, Router, Routes } from 'react-router-dom';
import PrivateRoutes from './utilty/PrivateRoutes';
//import Sidebar from './component/Sidebar';
//import OnlineUsers from './component/Online';



export default function App() {


  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  )
}

