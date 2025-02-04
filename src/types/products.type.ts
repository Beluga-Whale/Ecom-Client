export type ProductsTypes = {
  _id: string;
  name: string;
  imgProduct: string;
  desc: string;
  price: number;
  quantity: number;
};

export type ProductsResponse = {
  data: ProductsTypes[];
  total: number;
  totalPage: number;
  page: number;
  limit: number;
};
