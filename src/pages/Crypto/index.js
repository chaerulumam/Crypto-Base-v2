import React from "react";
import { FiltersItem, TableItem } from "../../components";

const Crypto = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <FiltersItem />
      <TableItem />
    </section>
  );
};

export default Crypto;
