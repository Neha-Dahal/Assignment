import axios, { ResponseType } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3002",
});

export const get = async (
  url: string,
  params = {},
  responseType = "json" as ResponseType
) => {
  return instance({
    url,
    params,
    method: "get",
    responseType,
  })
    .then((response) => response)
    .catch((error) => {
      console.log("error while making GET", error);
      throw error?.response?.data;
    });
};

export const post = async (url: string, { params = {}, body = {} }, headers={}) => {
  console.log("post");
  return instance({
    url,
    params,
    data: body,
    method: "post",
    headers,
  })
    .then((response) => response)
    .catch((error) => {
      throw error?.response.data;
    });
};
