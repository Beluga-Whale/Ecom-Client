import { useDispatch } from "react-redux";
import { ProductsTypes } from "../types/products.type";
import {
  deleteProduct,
  setProductGetPrice,
} from "../features/products/productSlice";
type CardCartProps = {
  product: ProductsTypes[];
};

const CardCart = ({ product }: CardCartProps) => {
  const dispatch = useDispatch();
  return (
    <>
      {product?.map((item: ProductsTypes) => (
        <div
          key={item?._id}
          className="flex justify-between h-32 p-2 bg-slate-100 mb-2 rounded-md "
        >
          {/* NOTE - Left */}
          <div className="flex flex-col justify-between">
            <div className="flex ">
              <img
                src={item.imgProduct}
                alt=""
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-1">
                <p className="font-semibold">{item.name}</p>
              </div>
            </div>
            <div>
              <button
                className=" bg-slate-300 px-2 rounded-md  "
                onClick={() =>
                  dispatch(
                    setProductGetPrice([
                      {
                        ...item,
                        quantity: -1,
                      },
                    ])
                  )
                }
                disabled={item.quantity == 1}
              >
                -
              </button>{" "}
              {item.quantity}{" "}
              <button
                className="bg-slate-300 px-2 rounded-md"
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
                +
              </button>
            </div>
          </div>
          {/* NOTE - Right */}
          <div className="flex flex-col justify-between">
            <button
              className="w-5 rounded-full self-end hover:bg-slate-500 hover:text-white"
              onClick={() => dispatch(deleteProduct(item?._id))}
            >
              X
            </button>
            <p>{item.price * item.quantity} บาท</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardCart;
