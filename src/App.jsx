import React from 'react'
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import RegisterPage from "./RegisterPage";
import "./styles.css"
import Navbar from './Navbar';
import Footer from './Footer';


// use wouter to create router in our React application
import {Route, Switch} from 'wouter'

export default function App(){
 
  return (
    <>

    <Navbar/>

    {/* <Switch> defines the area in your React application that changes when the user goes to a different route*/}
    <Switch>
      {/* One route is a URL path to a component */}
      <Route path="/" component={HomePage} />
      <Route path="/products" component={ProductPage} />
      <Route path="/register" component={RegisterPage} />
    </Switch>
    <Footer/>

    </>
  )
}