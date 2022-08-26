import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <nav className="flex flex-row pb-1 border-b-2 border-solid bg-dark rounded-xl">
      <div className="flex items-center mt-2 ml-2">
        <motion.div
          className="block"
          onClick={() => setIsActive(!isActive)}
          animate={{
            transition: { duration: 0.5 },
            rotate: isActive ? 360 : 0,
          }}
        >
          <img src="/src/assets/Logo.svg" className="w-10 h-10 dura" />
        </motion.div>
        <a
          href="https://user5522.github.io"
          className="p-3 text-xl font-bold text-white duration-300 rounded-2xl hover:bg-light_dark hover:shadow-md"
        >
          User5522
        </a>
      </div>
      <div className="flex self-center gap-5 p-3 ml-auto mr-0 text-white">
        <a
          href="https://example.com/somewhere"
          className="p-3 duration-300 rounded-2xl hover:bg-light_dark hover:shadow-md"
        >
          page that goes somewhere
        </a>
        <a
          href="/Vbot"
          className="p-3 duration-300 rounded-2xl hover:bg-light_dark hover:shadow-md"
        >
          Vbot
        </a>
        <a
          href="/404"
          className="flex self-center p-3 duration-300 rounded-2xl hover:bg-light_dark hover:shadow-md"
        >
          404
        </a>
      </div>
    </nav>
  );
}
