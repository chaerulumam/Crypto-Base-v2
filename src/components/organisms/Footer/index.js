import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-4">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://github.com/chaerulumam"
            target="_blank"
            className="hover:text-amber-500 italic"
            rel="noreferrer"
          >
            Chaerul Umam
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
