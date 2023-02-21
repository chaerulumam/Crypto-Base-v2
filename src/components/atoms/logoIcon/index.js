import logoIcon from "../../../assets/logoIC.svg";
import React from "react";
import { Link } from "react-router-dom";

const LogoIcon = () => {
  return (
    <Link
      to="/"
      className="absolute top-[1.5rem] left-[1.5rem] [text:decoration-none] text-lg text-amber-400 hover:text-amber-500 flex items-center"
    >
      <img src={logoIcon} alt="Logo" />
      <span>CryptoBase</span>
    </Link>
  );
};

export default LogoIcon;
