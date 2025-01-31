import React from "react";

const Search = () => {
  return (
    <div className="w-full">
      <h1>ค้นหาสินค้า</h1>
      <input
        type="text"
        placeholder="ค้นหาสินค้า"
        className="w-full rounded-lg p-2 text-lg "
      />
    </div>
  );
};

export default Search;
