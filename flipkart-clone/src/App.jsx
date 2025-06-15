import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./Components/ProductList";
import AddProduct from "./Components/AddProduct";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
      <>
      <Navbar onSearch={setSearchTerm} />
      <Routes>
        <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
      </>
  );
}

export default App;
