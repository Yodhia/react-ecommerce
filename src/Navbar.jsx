import React, {useState, useEffect} from "react";
import { Link, useLocation } from 'wouter';

export default function NavBar() {

    const [location] = useLocation(); // get the current url of the app

    const [isNavBarOpened, setNavBarOpen] = useState(false);

    const handleNavButtonClick = () => {

        setNavBarOpen(!isNavBarOpened);
    }

    useEffect(() => {

        const syncNavBar = () => {
            if (window.innerWidth >= 992) {
                setNavBarOpen(true);
            } else {
                setNavBarOpen(false);
            }
        }

        // when the window is being resized
        window.addEventListener("resize", syncNavBar);
        return () => {
            window.removeEventListener("resize", syncNavBar);
        }

    }, []); // the effect function is only ran once when the component is mounted


    // this function is for conditional rendering
    // if the given url matches the current location, then return `nav-link active`, otherwise just `nav-link`
    const isActiveLink = (url) => {
        if (location == url) {
            return "nav-link active"
        } else {
            return "nav-link";
        }       
    }

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
                        onClick={handleNavButtonClick}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavBarOpened ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className={`nav-link ${location == "/" ? "active" : ""}`} 
                                aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={isActiveLink("/products")} href="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={isActiveLink("/register")} href="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={isActiveLink("/cart")} href="/cart">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/cart" className={`nav-link ${location === '/cart' ? 'active' : ''}`}>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}