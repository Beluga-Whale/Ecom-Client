import { ProductsResponse, ProductsTypes } from "../types/products.type";

type ProductCardProps = {
  productData: ProductsResponse | undefined;
};

const ProductCard = ({ productData }: ProductCardProps) => {
  return (
    <>
      {productData?.data?.map((item: ProductsTypes) => (
        <div
          key={item?._id}
          className=" flex flex-col justify-between h-auto w-full border rounded-md shadow-md p-2  "
        >
          <div className="max-w-48 mx-auto  sm:w-36 ">
            <img
              className="w-full h-full  "
              src={`${item.imgProduct}`}
              alt=""
            />
          </div>
          <div className=" py-2 ">
            <p className="text-xl">{item?.name}</p>
            <p className=" line-clamp-4">{item?.desc}</p>

            <div className="flex justify-between pt-4">
              <p>{item?.price}</p>
              <p className="bg-red-500 px-6 text-white">Buy</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
