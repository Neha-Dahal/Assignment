import { fetchProducts } from "../../services/product";
import { useState, useEffect } from "react";
import "../../styles/productList.css"

interface Product {
  id: number;
  productName: string;
  quantity: string;
  price: string;
  userId: string;
}

export const GetProducts = () => {
  const [myProducts, setMyProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setMyProducts(data);
      console.log("data", data);
    })();
  }, []);

  return (
    <div className="container">
      <h2 className="page-title"> Products List</h2>
      <div className="products-container">
        {myProducts.length === 0 ? (
          <div>No products to show</div>
        ) : (
          myProducts.map((item) => (
            <div key={item.id} className="product-card">
              <h2 className="prod-title">
                {item.id}. {item.productName}
              </h2>
              <span className="prod-details">Rs. {item.price}</span>
              <span className="prod-details">Added by user : {item.userId}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
