import { get, post } from "./axios";

export const createProducts = async (productData: any) => {
  const authToken = localStorage.getItem("authentication_token");

  const { data } = await post(
    "products/addProduct",
    { body: productData },
    { Authorization: `Bearer ${authToken}` }
  );

  console.log("data", data);
  return data;
};

export const fetchProducts = async () => {
  const authToken = localStorage.getItem("authentication_token");

  const { data } = await get("products/getProducts", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  console.log("data", data);
  return data;
};

