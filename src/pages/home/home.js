import React from "react";
import "../../pages/home/home.css"
import About from "../../pages/about/about";
import SuggestProduct from "../../components/suggestProduct/suggestproduct.js";
import Product from "../../components/products/productvisitor.js";
const Home = () => {
  return (
<>
<section className="home-hero">
      <div className="home-contain">
        <h1 className="home-h1">Make your home happy with Mobilia</h1>
        <p className="home-p">
          your home should do perfect design to your home as possible as you can yalla
          u can do it uncle potato.
        </p>
        <button className="home-btn">Discover More</button>
      </div>
     
    </section>
     <SuggestProduct/>
     <Product/>
     <About/>
</>
  );
};

export default Home;
