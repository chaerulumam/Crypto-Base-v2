import React from "react";

const TableItem = () => {
  return (
    <div className="flex flex-col mt-9 border border-gray-100 rounded">
      <table className="w-full table-auto">
        <thead className="capitalize text-center text-base text-gray-100 font-medium border-b border-gray-100">
          <tr>
            <td className="py-1">asset</td>
            <td className="py-1">name</td>
            <td className="py-1">price</td>
            <td className="py-1">total volume</td>
            <td className="py-1">market cap change</td>
            <td className="py-1">1h</td>
            <td className="py-1">24h</td>
            <td className="py-1">7D</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0">
            <td className="py-4">aa</td>
            <td className="py-4">aa</td>
            <td className="py-4">aa</td>
            <td className="py-4">aa</td>
            <td className="py-4">aa</td>
            <td className="py-4">aa</td>
            <td className="py-4">aa</td>
            <td className="py-4">aa</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;
