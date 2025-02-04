import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductsResponse, ProductsTypes } from "../types/products.type";

const api_url: string = "http://localhost:3000/";

const getproductQueryKey = "getproductQueryKey";

const getProducts = async (
  page: number,
  limit: number
): Promise<ProductsResponse> => {
  const result = await axios.get(
    `${api_url}products?page=${page}&limit=${limit}`
  );
  return result.data;
};

export const useGetProducts = (page: number, limit: number) => {
  return useQuery({
    queryKey: [getproductQueryKey, page, limit],
    queryFn: () => getProducts(page, limit),
    placeholderData: (prev) => prev,
  });
};

export const useUpdateCart = () => {
  return useMutation({
    mutationFn: (
      products: Omit<ProductsTypes, "name" | "imgProduct" | "desc" | "price">[]
    ) => {
      return axios.post(`${api_url}products/calculate-price`, products);
    },
  });
};
