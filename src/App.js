import React from "react";
import { Outlet } from "react-router-dom";
import { LogoIcon, Navbar } from "./components";
import { CryptoProvider } from "./context/CryptoContext";

function App() {
  return (
    <CryptoProvider>
      <main className="w-full h-full flex flex-col first-letter:content-center items-center relative text-white font-semibold font-nunito">
        <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
        <LogoIcon />
        <Navbar />
        <Outlet />
      </main>
    </CryptoProvider>
  );
}

export default App;
