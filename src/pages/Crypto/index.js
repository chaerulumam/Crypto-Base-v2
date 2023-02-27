import React from "react";
import { Outlet } from "react-router-dom";
import { FiltersItem, TableItem } from "../../components";

const Crypto = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <FiltersItem />
      <TableItem />
      <Outlet />
    </section>
  );
};

export default Crypto;
