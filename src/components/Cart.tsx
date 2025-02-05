import { useEffect, useState } from "react";
import { useUpdateCart } from "../queryAPI/productsAPI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import CardCart from "./CardCart";
import Swal from "sweetalert2";
import { clearCart } from "../features/products/productSlice";

type PriceType = {
  totalPrice?: number;
  priceDiscount?: number;
};

const Cart = () => {
  const [price, setPrice] = useState<PriceType>();

  const { product } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { mutateAsync } = useUpdateCart();

  const handleClick = () => {
    Swal.fire({
      title: "ต้องการซื้อสินค้าใช่หรือไม่",
      text: "ตรวจสอบสินค้าก่อนทำการยืนยัน",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "สำเร็จ!",
          text: "",
          icon: "success",
        }).then((res) => {
          if (res.isConfirmed) {
            dispatch(clearCart());
          }
        });
      }
    });
  };

  useEffect(() => {
    const updateCart = async () => {
      try {
        const res = await mutateAsync(product);
        setPrice(res?.data);
      } catch (error) {
        alert(error);
      }
    };
    updateCart();
  }, [product, mutateAsync]);
  return (
    <div>
      <p className="text-lg font-bold">Carts</p>
      <div>
        <CardCart product={product} />
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p>ส่วนลด (Promo tion)</p>
          <p>{price?.priceDiscount ?? 0} บาท</p>
        </div>
        <div className="flex justify-between items-center">
          <p>ราคารวม</p>
          <p>{price?.totalPrice ?? 0} บาท</p>
        </div>
      </div>
      <button
        className={`mt-5 rounded-lg  ${
          price?.totalPrice !== 0 ? "bg-purple-400" : "bg-slate-400"
        }  text-white px-5 py-2 hover:bg-purple-300`}
        onClick={() => handleClick()}
        disabled={price?.totalPrice === 0}
      >
        ซื้อสินค้า
      </button>
    </div>
  );
};

export default Cart;
