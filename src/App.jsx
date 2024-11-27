import React, {useEffect} from 'react'
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import RegisterPage from "./RegisterPage";
import "./styles.css"
import Navbar from './Navbar';
import Footer from './Footer';
import { useFlashMessage } from './FlashMessageStore';


// use wouter to create router in our React application
import {Route, Switch} from 'wouter'

export default function App(){

  const {clearMessage, getMessage} = useFlashMessage();
  const flashMessage = getMessage();

  useEffect(() => {
    const timer = setTimeout(()=> {
      clearMessage();
    }, 3000)

    return () => {
      clearTimeout(timer);
    }
  }, [flashMessage]);


  return (
    <>

    <Navbar/>
    { flashMessage.message && (
      <div className={`alert alert-${flashMessage.type} text-centre flash-alert`}>
        {flashMessage.message}
      </div>
    )}


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