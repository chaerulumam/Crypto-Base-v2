import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-[40%] mt-16 flex justify-around align-middle border border-amber-400 rounded-lg">
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full text-center text-base font-nunito m-2.5 ${
            isActive
              ? "  text-amber-300 "
              : " hover:text-amber-500 active:bg-amber-500 active:text-gray-300 "
          } border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full text-center text-base font-nunito m-2.5 ${
            isActive
              ? "  text-amber-300 "
              : " hover:text-amber-500 active:bg-amber-500 active:text-gray-300 "
          } border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Trending
      </NavLink>
      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full text-center text-base font-nunito m-2.5 ${
            isActive
              ? "  text-amber-300 "
              : " hover:text-amber-500 active:bg-amber-500 active:text-gray-300 "
          } border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Saved
      </NavLink>
    </nav>
  );
};

export default Navbar;
