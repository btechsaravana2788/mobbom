import React, { useState, useEffect } from "react";
import { Topbar } from "./components/topbar";
import { Navbar } from "./components/navbar";
import { Featured } from "./components/featured";
import { Category } from "./components/category";
import { Offers } from "./components/offers";
import { Products } from "./components/products";
import { Subscribe } from "./components/subscribe";
import { Justarrived } from "./components/justarrived";
import { Vendor } from "./components/vendor";
import { Footer } from "./components/footer";
import './App.css';

function App() {
	const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
      <Topbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Navbar />
      <Products searchQuery={searchQuery}/>
      <Vendor />
	  <Footer />
    </div>
  );
}

export default App;
