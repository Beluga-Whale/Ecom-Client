import React from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      {/* Search */}
      <div className="bg-red-200  p-4 ">Search</div>
      <div className=" lg:flex gap-4 ">
        {/* Product */}

        <div className="bg-green-200 lg:w-3/4 lg:min-h-screen p-4 ">
          <p> สินค้า</p>
          <div className="grid xs:grid-cols-2 md:grid-cols-3 mt-4 ">
            {/* Product Card */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex flex-row justify-center text-center  gap-4  my-4">
            <button>Previous</button>

            <a href="/">1</a>
            <a href="/">2</a>
            <button>Next</button>
          </div>
        </div>
        {/* Cart */}
        <div className="bg-yellow-200 lg:w-1/4 p-4">Cart</div>
      </div>
    </>
  );
};

export default Home;
