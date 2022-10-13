import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import store from "./store";
import { Provider } from "react-redux";
import Cards_Big from "./Cards_Big"
// import testing_router from
import Testing_Hooks from "./Testing_Hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Provider store={store}>
              <Home />
            </Provider>
          }
        />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
    {/* <Cards_Big />
    {/* <Testing_Hooks /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
