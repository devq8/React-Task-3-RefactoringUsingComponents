import React from "react";

import "./App.css";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="body">
      <Home />
      <ProductList />
    </div>
  );
}

export default App;
