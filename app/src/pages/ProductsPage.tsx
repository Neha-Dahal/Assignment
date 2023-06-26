import { Link } from "react-router-dom";
import { GetProducts } from "../components/product/GetProducts";

export const ProductsPage = () => {
  return (
    <div>
      <GetProducts />
      <Link to="/add-product">Add products page</Link>
    </div>
  );
};
