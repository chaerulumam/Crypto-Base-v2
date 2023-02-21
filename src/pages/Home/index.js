import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Ini Home</p>
      <Outlet />
    </div>
  );
};

export default Home;
