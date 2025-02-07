import React, { useState } from "react";
import "./navbar.css"; // Assuming the CSS is saved here
import CloseIcon from "../../Images/svgs/close_FILL0_wght400_GRAD0_opsz48.svg";
import MenuIcon from "../../Images/svgs/menu_FILL0_wght400_GRAD0_opsz48.svg";

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showSidebar = () => setIsSidebarVisible(true);
  const hideSidebar = () => setIsSidebarVisible(false);

  return (
    <nav>
      {/* Sidebar */}
      <ul className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>


        <li onClick={hideSidebar}>
          <a href="/">
            <img src={CloseIcon} alt="Close menu" width={26} height={26} />
          </a>
        </li>
        <li><a href="/">Festival Offer</a></li>
        <li><a href="/shop">Products</a></li>
        <li><a href="/shop">About</a></li>
        <li><a href="/signup">signup</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href='/cart'>cart</a></li>
      </ul>

      {/* Main Navbar */}
      <ul>
        <li><a href="/">Logo here</a></li>
        <li className="hideOnMobile"><a href="/">festiveal offer</a></li>
        <li className="hideOnMobile"><a href='/shop'>Products</a></li>
        <li className="hideOnMobile"><a href="/about">About</a></li>
        <li className="hideOnMobile"><a href="/signup">signup</a></li>
        <li className="hideOnMobile"><a href="/login">Login</a></li>
        <li className="hideOnMobile"><a href="/cart">cart</a></li>
        <li className="menu-button" onClick={showSidebar}>
       
          <a href="#">
            <img src={MenuIcon} alt="Open menu" width={26} height={26} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 