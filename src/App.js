import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loaader";
import Brand from "./pages/Brand";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Register from "./pages/Register";
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));

// Custom wrapper to show Loader on route changes/* 
const RouteWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // Simulating a short loading delay
    return () => clearTimeout(timeout);
  }, [location]);

  return loading ? <Loader /> : children;
};

function App() {
  return (
    <Suspense fallback={<Loader />}> 
      <Router>
        <ToastContainer position="top-right" autoClose={1000} hideProgressBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/brand/:brandName" element={<Brand />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </Router>
    </Suspense> 
  );
}

export default App;
