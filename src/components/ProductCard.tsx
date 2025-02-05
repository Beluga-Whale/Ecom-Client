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
          className=" flex flex-col justify-between h-auto w-full border rounded-md shadow-md p-2  bg-white "
        >
          <div className="max-w-48 mx-auto  sm:w-36 ">
            <img
              className="w-full h-full rounded-lg  "
              src={`${item.imgProduct}`}
              alt=""
            />
          </div>
          <div className=" py-2 ">
            <p className="text-xl font-bold">{item?.name}</p>
            <p className="text-sm line-clamp-4">{item?.desc}</p>

            <div className="flex flex-col items-center justify-between pt-4">
              <p className="font-bold">
                {item?.price} <span>บาท</span>{" "}
              </p>
              <button
                className="bg-orange-400 rounded-xl px-6  text-white hover:bg-yellow-300 "
                onClick={() =>
                  dispatch(
                    setProductGetPrice([
                      {
                        ...item,
                        quantity: 1,
                      },
                    ])
                  )
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
