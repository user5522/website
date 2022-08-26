import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <nav className="relative pb-72 bg-dark">
      <div className="absolute flex items-center justify-center p-2 mt-2">
        <img src="/src/assets/Logo_flat_monochrome.svg" className="h-36" />
        <img src="/src/assets/Woodmark.svg" className="h-16 mt-7" />
      </div>
      <motion.div
        className="block"
        onClick={() => setIsActive(!isActive)}
        animate={{
          transition: { duration: 0.5 },
          rotate: isActive ? 360 : 0,
        }}
      ></motion.div>
      <div className="absolute ml-10 text-sm bottom-4 text-gray_proper">
        © 2022 User5522. All Rights Reserved.
      </div>
      <div className="absolute mt-16 text-white right-96">
        <div className="text-xl text-white ">All website links:</div>-{" "}
        <a
          href="/"
          className="text-white no-underline duration-1000 bg-dark hover:bg-blue-400"
        >
          Home
        </a>
        <br />-{" "}
        <a
          href="/Vbot"
          className="text-white no-underline duration-1000 bg-dark hover:bg-blue-400"
        >
          Vbot
        </a>
        <br />-{" "}
        <a
          href="/404"
          className="text-white no-underline duration-1000 bg-dark hover:bg-blue-400"
        >
          404
        </a>
        <br />-{" "}
        <a
          href="/about"
          className="text-white no-underline duration-1000 bg-dark hover:bg-blue-400"
        >
          About
        </a>
        <br />
      </div>
    </nav>
  );
}
