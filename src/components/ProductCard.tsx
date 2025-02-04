import { useDispatch } from "react-redux";
import { ProductsResponse, ProductsTypes } from "../types/products.type";
import { setProductGetPrice } from "../features/products/productSlice";

type ProductCardProps = {
  productData: ProductsResponse | undefined;
};

const ProductCard = ({ productData }: ProductCardProps) => {
  const dispatch = useDispatch();
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
              <button
                className="bg-red-500 px-6 text-white"
                onClick={() =>
                  dispatch(
                    setProductGetPrice([
                      {
                        _id: item._id,
                        quantity: 1,
                      },
                    ])
                  )
                }
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
