import { Link } from "react-router-dom";
import "../../styles/header.css";

export const Header = () => {
  return (
    <div className="nav-container">
      <Link to="/add-product">Add Product</Link>
      <Link to="/products">View All Products</Link>
    </div>
  );
};
