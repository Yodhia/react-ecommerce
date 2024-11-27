import React from 'react'
import { useCart } from './CartStore';
import { useLocation } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';


export default function ProductCard(props) {

  const { addToCart} = useCart();
  const [, setLocation] = useLocation();
  const { showMessage} = useFlashMessage();

  const handleAddToCart = () => {
    addToCart(props);
    showMessage('Item added to cart', 'success');
    setLocation('/cart');
  }

    return (
        <div className="card">
            <img
              src={props.imageUrl}
              className="card-img-top"
              alt={props.productName}
            />
            <div className="card-body">
              <h5 className="card-title">{props.productName}</h5>
              <p className="card-text">{props.price}</p>
              <a href="#" className="btn btn-success">Add to Cart</a>
            </div>
          </div>
    )
}