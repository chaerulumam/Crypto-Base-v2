import React from "react";
import CurrencySearch from "../CurrencySearch";
import SearchItem from "../SearchItem";
import Sorting from "../Sorting";

const FiltersItem = () => {
  return (
    <div className="w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
      <SearchItem />
      <div className="flex mr-7">
        <CurrencySearch />
        <Sorting />
      </div>
    </div>
  );
};

export default FiltersItem;
