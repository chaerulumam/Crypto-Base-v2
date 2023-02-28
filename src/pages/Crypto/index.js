import React from "react";
import { Outlet } from "react-router-dom";
import { FiltersItem, TableItem } from "../../components";

const Crypto = () => {
  return (
    <section className="xs:w-[80%] w-[90%] h-full flex flex-col mt-16 mb-24 relative">
      <FiltersItem />
      <TableItem />
      <Outlet />
    </section>
  );
};

export default Crypto;
