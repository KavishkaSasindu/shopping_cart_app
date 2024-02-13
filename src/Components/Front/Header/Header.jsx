/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

function Header() {
  const [nav, setNav] = useState(false);

  const setNavBar = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="w-full flex justify-center items-center h-[50px] bg-gray-900 text-white">
        {/* Large Device Menu */}
        <div className="flex justify-between w-[90%] items-center">
          <div>
            <Link to={"/"}>
              <h1 className="text-2xl font-semibold ">Shopping</h1>
            </Link>
          </div>
          <div className="hidden md:flex">
            <ul className="text-xl font-semibold flex items-center space-x-10">
              <Link>
                <li>Home</li>
              </Link>
              <Link to={"signUp"}>
                <li>Sign Up</li>
              </Link>
              <Link to={"cart"}>
                <li>
                  <BsFillCartCheckFill size={25} />
                </li>
              </Link>
            </ul>
          </div>
          <div className="md:hidden ">
            <button
              className="transition-all duration-300 hover:scale-110"
              onClick={setNavBar}
            >
              {nav ? <MdClose size={25} /> : <AiOutlineMenu size={25} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className={` ${
            nav
              ? "flex justify-center items-center w-full h-[40vh] bg-gray-200 shadow-lg rounded-md"
              : "hidden"
          }`}
        >
          <ul className="text-xl font-semibold ">
            <Link>
              <li className="m-8 hover:scale-110 transition-all duration-300">
                Home
              </li>
            </Link>
            <Link to={"signUp"}>
              <li className="m-8 hover:scale-110 transition-all duration-300">
                Sign Up
              </li>
            </Link>
            <Link to={"cart"}>
              <li className="m-8 hover:scale-110 transition-all duration-300">
                <BsFillCartCheckFill size={25} />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
