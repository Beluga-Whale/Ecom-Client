import React, { useEffect, useState } from "react";
import { useUpdateCart } from "../queryAPI/productsAPI";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Cart = () => {
  const [carts, setCarts] = useState();
  const { product } = useSelector((state: RootState) => state);
  const { mutateAsync } = useUpdateCart();

  useEffect(() => {
    const updateCart = async () => {
      try {
        const res = await mutateAsync(product);
        setCarts(res?.data);
      } catch (error) {
        alert(error);
      }
    };
    updateCart();
  }, [product, mutateAsync]);
  return (
    <div>
      {JSON.stringify(product)}
      <p>{carts}</p>
    </div>
  );
};

export default Cart;
