import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductsResponse } from "../types/products.type";

const getproductQueryKey = "getproductQueryKey";

const getProducts = async (
  page: number,
  limit: number
): Promise<ProductsResponse> => {
  const result = await axios.get(
    `http://localhost:3000/products?page=${page}&limit=${limit}`
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
