import React, { useState } from "react";
import { FormInput } from "../formInput/FormInput";
import { Button } from "../button/Button";
import { createProducts } from "../../services/product";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface ProductProps {
  productName: string;
  quantity: string;
  price: string;
  userId: string;
}

export const AddProductForm = () => {
  const userId = useSelector((state: RootState) => state.userData.userId);

  const [values, setValues] = useState<ProductProps>({
    productName: "",
    quantity: "",
    price: "",
    userId: userId,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { productName, quantity, price } = values;

      const productData = {
        productName,
        quantity,
        price,
        userId: userId,
      };

      await createProducts(productData);
      setValues({
        productName: "",
        quantity: "",
        price: "",
        userId: userId,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const isDisabled: boolean =
    values.productName === "" || values.quantity === "" || values.price === "";

  return (
    <div className="container">
      <h2>Add Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <FormInput
            type="text"
            name="productName"
            placeholder="Enter product name"
            value={values.productName}
            label="Product Name"
            onChange={onChange}
          />
        </div>
        <div>
          <FormInput
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            value={values.quantity || ""}
            label="Quantity"
            onChange={onChange}
          />
        </div>
        <div>
          <FormInput
            type="number"
            name="price"
            placeholder="Enter price"
            value={values.price || ""}
            label="Price"
            onChange={onChange}
          />
        </div>
        <div>
          <Button disabled={isDisabled} buttonText="Submit" />
        </div>
      </form>
    </div>
  );
};
