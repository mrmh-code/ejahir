import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  Products,
  SingleProducts,
  About,
  Cart,
  Error,
  CheckOut,
  PrivateRoute,
  AuthWrapper
} from "./pages";

function App() {
  return (
    <AuthWrapper>
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<SingleProducts/>}/>
      <Route path='/checkOut' element={ <PrivateRoute> <CheckOut/> </PrivateRoute>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
