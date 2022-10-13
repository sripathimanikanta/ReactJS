// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Anime from './Anime';
// import Form from './Form';
// import Todolist from './Todolist';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import store from "./store";
import { Provider } from "react-redux";


function App() {
  return (
    // <Anime />
    // <Form />
    // <Todolist />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={store}>
            <Home />
          </Provider>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="*" element={ <div>Error</div>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
