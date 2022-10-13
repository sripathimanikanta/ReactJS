import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import store from "./store";
import { Provider } from "react-redux";
import Nav from './Nav';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<Provider store={store}><Nav /></Provider>}> 
      <Route index element={<Home />}/>
      <Route path="collections" element={<div>Collections</div>} />
      <Route path="Men" element={<div>Men</div>} />
      <Route path="Women" element={<div>Women</div>} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<div>Contact</div>} />
      <Route path="*" element={ <div>Error</div>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
