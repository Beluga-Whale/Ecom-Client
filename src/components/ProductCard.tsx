import React from "react";

const ProductCard = () => {
  return (
    <div className="h-auto w-full  border rounded-md shadow-md p-2  ">
      <div className="max-w-48 mx-auto  sm:w-36 ">
        <img
          className="w-full h-full  "
          src="https://upload.wikimedia.org/wikipedia/th/a/a2/Hp_ps_thai.jpg"
          alt=""
        />
      </div>
      <div className="py-2">
        <p className="text-xl">Name</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
          veritatis eligendi nihil quam illo saepe vitae aspernatur inventore.
          Iusto, aliquam.
        </p>

        <div className="flex justify-between pt-4">
          <p>10,000</p>
          <p className="bg-red-500 px-6 text-white">Buy</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
