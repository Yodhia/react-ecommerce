import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCard from './ProductCard';

export default function ProductPage() {

  const [products, setProducts] = useState([]);


  useEffect(() => {

    // The effect function cannot be async
    const loadData = async () => {
  
        // all URLs to static assets will be relative to public
      const response = await axios.get("/products.json");
      setProducts(response.data);
    }
    loadData();
  }, [])


  const renderProductV2 = () => {
    const jsxElements = products.map(function (p) {
      return <li key={p.id}>{p.name} ${p.price}</li>
    })
    return jsxElements;
  }

  const renderProducts = () => {
    const jsxElements = [];
    for (let p of products) {
      jsxElements.push(<li key={p.id}>
        {p.name} ${p.price}
      </li>);
    }
    return jsxElements;
  }

  return (
    <>
      <h1>Products</h1>
      <div className="row">
        {products.map(p =>
          <div className="col-12 col-md-4 col-lg-3">
            <ProductCard
              productName={p.name}
              price={p.price}
              imageUrl={p.image}
              id={p.id}
              description={p.description}
              category = {p.category}
            />
          </div>
        )}
      </div>


    </>

  )
}

// export default ProductsPage;