import Cart from "../components/Cart";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import { useGetProducts } from "../queryAPI/productsAPI";
import { useEffect, useState } from "react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    data: productData,
    isLoading,
    refetch,
  } = useGetProducts(currentPage, 5);

  const pages = Array(productData?.totalPage)
    .fill(0)
    .map((_, i) => i + 1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    refetch(); // เรียกใช้ refetch เมื่อ currentPage เปลี่ยน
  }, [currentPage, refetch]);

  if (isLoading) return null;
  return (
    <>
      {/* Search */}
      <div className="bg-red-200 p-4 ">
        <Search />
      </div>
      <div className=" lg:flex gap-4 ">
        {/* Product */}

        <div className="bg-green-200 lg:w-3/4 lg:min-h-screen p-4 ">
          <p> สินค้า</p>
          <div className="grid xs:grid-cols-2 md:grid-cols-3 mt-4 ">
            {/* Product Card */}
            <ProductCard productData={productData} />
          </div>
          <div className="flex flex-row justify-center text-center  gap-4  my-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1 ? "text-gray-400" : "text-black"
              }`}
            >
              Previous
            </button>
            {pages.map((item) => (
              <button
                key={item}
                onClick={() => handlePageChange(item)}
                disabled={currentPage === item}
              >
                <p
                  className={`${
                    currentPage === item ? "text-gray-400" : "black"
                  }`}
                >
                  {item}
                </p>
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === productData?.totalPage}
              className={`${
                currentPage === productData?.totalPage
                  ? "text-gray-400"
                  : "text-black"
              }`}
            >
              Next
            </button>
          </div>
        </div>
        {/* Cart */}
        <div className="bg-yellow-200 lg:w-1/4 p-4">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Home;
