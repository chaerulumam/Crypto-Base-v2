import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, LogoIcon, Navbar } from "./components";
import { CryptoProvider } from "./context/CryptoContext";
import { TrendingProvider } from "./context/TrendingContext";

function App() {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <main className="w-full h-full flex flex-col first-letter:content-center items-center relative text-white font-nunito">
          <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
          <LogoIcon />
          <Navbar />
          <Outlet />
          <Footer />
        </main>
      </TrendingProvider>
    </CryptoProvider>
  );
}

export default App;
