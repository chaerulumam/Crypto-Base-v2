import React from "react";
import SearchItem from "../SearchItem";

const FiltersItem = () => {
  return (
    <div className="w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
      <div>
        <SearchItem />
      </div>
      <div>currency</div>
      <div>sorting</div>
    </div>
  );
};

export default FiltersItem;
