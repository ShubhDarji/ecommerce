import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; 
import CloseIcon from "../../Images/svgs/close_FILL0_wght400_GRAD0_opsz48.svg";
import MenuIcon from "../../Images/svgs/menu_FILL0_wght400_GRAD0_opsz48.svg";
import CartIcon from "../../Images/svgs/shopping-cart-01-svgrepo-com.svg"; 

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Function to update cart count dynamically
  const updateCartCount = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(storedCart.length);
  };

  // Fetch cart count on mount and listen for changes
  useEffect(() => {
    updateCartCount(); 

    // Listen for storage changes (when items are added/removed)
    const handleStorageChange = () => updateCartCount();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Listen for cart updates from other components (like the cart page)
  useEffect(() => {
    const interval = setInterval(() => {
      updateCartCount(); // Poll every second for changes
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      {/* Sidebar */}
      <ul className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
        <li onClick={() => setIsSidebarVisible(false)}>
          <img src={CloseIcon} alt="Close menu" width={26} height={26} />
        </li>
        <li onClick={() => setIsSidebarVisible(false)}><Link to="/">Festival Offer</Link></li>
        <li onClick={() => setIsSidebarVisible(false)}><Link to="/shop">Products</Link></li>
        <li onClick={() => setIsSidebarVisible(false)}><Link to="/about">About</Link></li>
        <li onClick={() => setIsSidebarVisible(false)}><Link to="/signup">Signup</Link></li>
        <li onClick={() => setIsSidebarVisible(false)}><Link to="/login">Login</Link></li>
        <li onClick={() => setIsSidebarVisible(false)}>
          <Link to="/cart">
            <img src={CartIcon} alt="Cart" width={26} height={26} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>
      </ul>

      {/* Main Navbar */}
      <ul>
        <li><Link to="/">Logo here</Link></li>
        <li className="hideOnMobile"><Link to="/">Festival Offer</Link></li>
        <li className="hideOnMobile"><Link to="/shop">Products</Link></li>
        <li className="hideOnMobile"><Link to="/about">About</Link></li>
        <li className="hideOnMobile"><Link to="/signup">Signup</Link></li>
        <li className="hideOnMobile"><Link to="/login">Login</Link></li>
        
        {/* Cart Icon with Dynamic Count */}
        <li className="hideOnMobile">
          <Link to="/cart" className="cart-icon">
            <img src={CartIcon} alt="Cart" width={26} height={26} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>

        {/* Mobile Menu Button */}
        <li className="menu-button" onClick={() => setIsSidebarVisible(true)}>
          <img src={MenuIcon} alt="Open menu" width={26} height={26} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
