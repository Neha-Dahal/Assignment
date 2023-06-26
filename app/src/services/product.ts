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

// import { get, post} from "./axios";

// export const createProducts = async (productData: any) => {
//   const { data } = await post("products/addProduct", { body: productData });
//   console.log("data", data);
//   return data;
// };

// export const fetchProducts = async () => {
//   const { data } = await get("products/getProducts");
//   console.log("data", data);
//   return data;
// };
