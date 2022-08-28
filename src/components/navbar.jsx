import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const [imgURL, setImgURL] = useState("/burger.svg");
  const [isActive, setIsActive] = useState(false);

  function handleButtonClick() {
    setImgURL("/close.svg");
  }

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <div className="p-3 ">
      <nav
        style={{
          borderBottomLeftRadius: isShown ? "0px" : "12px",
          borderBottomRightRadius: isShown ? "0px" : "12px",
        }}
        className="flex flex-row items-center p-5 rounded-t-xl bg-dark"
      >
        <div className="z-20 flex flex-row items-center gap-2">
          <motion.div
            className="block"
            onClick={() => setIsActive(!isActive)}
            animate={{
              rotate: isActive ? 160 : 360,
            }}
          >
            <img
              src="/Logo-flat.svg"
              className="items-center h-10 rounded-full bg-dark_light"
            />
          </motion.div>
          <button className="p-3 duration-100 rounded-lg hover:bg-dark_light hover:scale-110 active:scale-90">
            <a href="/" className="text-xl font-semibold ">
              User5522
            </a>
          </button>
        </div>
        <div className="md:hidden">
          <div className="flex items-center">
            <button
              className="absolute p-3 text-xl duration-100 rounded-lg hover:bg-dark_light hover:scale-110 active:scale-90 right-10"
              onClick={() => {
                handleButtonClick();
                handleClick();
              }}
            >
              <img src={imgURL} className="text-white" />
            </button>
          </div>
        </div>
      </nav>
      {isShown && (
        <div className="min-h-screen bg-dark rounded-b-xl min-w-screen ">
          Tester
        </div>
      )}
    </div>
  );
}
