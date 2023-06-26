import { post } from "./axios";

export const registerUser = async (userData: any) => {
  const data = await post(
    "/users/register",
    { body: userData },
    { headers: {} }
  );
  console.log("data", data);
  return data;
};

export const loginUser = async (
  userData: any
): Promise<{ token: string; userId: string }> => {
  const response = await post(
    "users/login",
    { body: userData },
    { headers: {} }
  );
  const token = response.data.token;
  const userIdNum = response.data.id;
  const userId = userIdNum.toString();
  console.log(token, userId); // Retrieve the user ID from the response data
  return { token, userId };
};
