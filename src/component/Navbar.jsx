import { MapPin } from "lucide-react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

const Navbar = () => {
  const location = false;
  return (
    <div className="py-3 shadow-2xl ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* logo section  */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h2 className="font-bold text-3xl">
              <span className=" text-red-600">Kena</span>Karta
            </h2>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div></div> : "Add Address"}
            </span>
            <FaCaretDown />
          </div>
        </div>
        {/* menu sectioon */}
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-xl font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 boder-red-800 transition-all" : "text-black"} `
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 boder-red-800 transition-all" : "text-black"} `
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 boder-red-800 transition-all" : "text-black"} `
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contacts"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 boder-red-800 transition-all" : "text-black"} `
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>

          <div className=" flex gap-5 ">
            <Show className=" flex gap-5 " when="signed-out">
              <SignInButton className="border border-red-900 rounded-xl px-3 bg-red-500 hover:bg-transparent duration-300 transition-all" />
              <SignUpButton className="border border-red-900 rounded-xl px-3 bg-red-500 hover:bg-transparent duration-300 transition-all" />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
