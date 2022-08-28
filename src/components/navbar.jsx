import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar(props) {
  const [isShown, setIsShown] = useState(false);
  const [imgURL, setImgURL] = useState("/burger.svg");
  const [isActive, setIsActive] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 420 ||
      document.documentElement.scrollTop > 420
    ) {
      document.getElementById("navbar").style.padding = "5px";
      document.getElementById("logo").style.height = "50px";
      document.getElementById("logo_text").style.padding = "8px";
      document.getElementById("burgerking_menu").style.padding = "8px";
      setIsShown(false);
    } else {
      document.getElementById("navbar").style.padding = "10px";
      document.getElementById("logo").style.height = "60px";
      document.getElementById("logo_text").style.padding = "12px";
      document.getElementById("burgerking_menu").style.padding = "12px";
    }
  }
  // function changeIcon(props) {
  //   setImgURL("/close.svg");
  // }

  const showMenu = () => {
    setIsShown((current) => !current);
  };

  return (
    <div className="p-3 ">
      <nav
        style={{
          borderBottomLeftRadius: isShown ? "0px" : "12px",
          borderBottomRightRadius: isShown ? "0px" : "12px",
        }}
        id="navbar"
        className="flex flex-row items-center p-5 rounded-t-xl bg-dark"
      >
        <div
          className="flex flex-row items-center gap-2 duration-300"
          id="logo"
        >
          <motion.div
            className="block"
            onClick={() => setIsActive(!isActive)}
            animate={{
              rotate: isActive ? 158.5 : 360,
            }}
          >
            <img
              src="/Logo-flat.svg"
              id="logo_img"
              className="items-center h-10 rounded-full bg-dark_light"
            />
          </motion.div>
          <Link to="https://react.semantic-ui.com/" />
          <button
            href="/"
            id="logo_text"
            className="p-3 text-xl font-semibold duration-100 rounded-lg hover:bg-dark_light hover:scale-110 active:scale-90"
          >
            User5522
          </button>
        </div>
        <div className="md:hidden">
          <div className="flex items-center">
            <button
              id="burgerking_menu"
              className="absolute p-3 text-xl duration-100 rounded-lg hover:bg-dark_light hover:scale-110 active:scale-90 right-10"
              onClick={() => {
                showMenu();
              }}
            >
              <img src={imgURL} />
            </button>
          </div>
        </div>
      </nav>
      {isShown && (
        <div className="flex flex-col items-center justify-center max-h-screen gap-5 pb-10 pl-10 pr-10 bg-dark rounded-b-xl min-w-screen ">
          <button
            href="/Vbot"
            className="w-full p-3 duration-200 bg-dark_light rounded-xl hover:scale-110 active:scale-90"
          >
            Vbot
          </button>
          <>
            <button className="w-full p-3 duration-200 bg-dark_light rounded-xl hover:scale-110 active:scale-90">
              404 page
            </button>
          </>
          <button
            href="/About"
            className="w-full p-3 duration-200 bg-dark_light rounded-xl hover:scale-110 active:scale-90"
          >
            About (unavailable)
          </button>
        </div>
      )}
    </div>

    /* {!isShown && (
        <div className="absolute flex flex-row items-center justify-center gap-5 right-10">
          <button className="w-full p-3 duration-200 hover:bg-dark_light rounded-xl hover:scale-110">
            Vbot
          </button>
          <button className="w-full p-3 duration-200 hover:bg-dark_light rounded-xl hover:scale-110">
            404
          </button>
          <button className="w-full p-3 duration-200 hover:bg-dark_light rounded-xl hover:scale-110">
            About
          </button>
        </div>
      )} */
  );
}
