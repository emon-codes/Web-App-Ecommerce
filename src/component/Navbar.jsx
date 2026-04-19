import { MapPin } from "lucide-react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = false;
  return (
    <div className="py-3 shadow-2xl ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* logo section  */}
        <div className="">
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
      </div>
    </div>
  );
};

export default Navbar;
