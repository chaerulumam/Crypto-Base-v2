import React from "react";
import { Outlet } from "react-router-dom";
import { LogoIcon } from "../../components/atoms";
import Navbar from "../../components/organisms/Navbar";

const Home = () => {
  return (
    <main className="w-full h-full flex flex-col first-letter:content-center items-center relative text-white font-semibold font-nunito">
      <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
      <LogoIcon />
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Home;
