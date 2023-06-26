import { Header } from "../components/header/Header";
import { GetProducts } from "../components/product/GetProducts";

export const ProductsPage = () => {
  return (
    <>
      <Header />{" "}
      <div>
        <GetProducts />
      </div>
    </>
  );
};
