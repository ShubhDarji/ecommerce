import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Ensure your styles are updated
import CloseIcon from "../../Images/svgs/close_FILL0_wght400_GRAD0_opsz48.svg";
import MenuIcon from "../../Images/svgs/menu_FILL0_wght400_GRAD0_opsz48.svg";
import CartIcon from "../../Images/svgs/shopping-cart-01-svgrepo-com.svg"; // Add a cart icon

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items (assuming stored in localStorage)
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const showSidebar = () => setIsSidebarVisible(true);
  const hideSidebar = () => setIsSidebarVisible(false);

  return (
    <nav>
      {/* Sidebar */}
      <ul className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
        <li onClick={hideSidebar}>
          <img src={CloseIcon} alt="Close menu" width={26} height={26} />
        </li>
        <li><Link to="/">Festival Offer</Link></li>
        <li><Link to="/shop">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li>
          <Link to="/cart">
            <img src={CartIcon} alt="Cart" width={26} height={26} />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
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
        
        {/* Cart Icon with Item Count */}
        <li className="hideOnMobile">
          <Link to="/cart" className="cart-icon">
            <img src={CartIcon} alt="Cart" width={26} height={26} />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </Link>
        </li>

        {/* Menu Button for Mobile */}
        <li className="menu-button" onClick={showSidebar}>
          <img src={MenuIcon} alt="Open menu" width={26} height={26} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
