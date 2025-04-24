import React from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import HomePage from "./HomePage";

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Products />
    </div>
  );
};

export default App;
