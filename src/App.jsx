import React from 'react'
import Header from "./Header"
import "./styles.css"
import ProductCard from "./ProductCard"


export default function App(){
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">E-Shop</a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Header title="ACME Hardware"/>

    <main className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
       <ProductCard
        imageUrl="https://picsum.photos/id/1/300/200"
        productName="Anvil"
        price="$100"
       />

        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="https://picsum.photos/id/1/300/200"
            productName="Tool Bag"
            price="$50"
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="https://picsum.photos/id/26/300/200"
            productName="Hammer"
            price="$45"
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="https://picsum.photos/id/96/300/200"
            productName="Screwdriver"
            price="$13"
          />
        </div>
      </div>
    </main>

    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>


    </>
  )
}