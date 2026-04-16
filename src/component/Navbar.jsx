import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-3 shadow-2xl ">
      <div className="max-w-7xl items-center justify-between">
        {/* logo section  */}
        <div className="">
          <Link to={"/"}>
            <h2 className="font-bold text-3xl">
              {" "}
              <span className=" text-red-600">Kena</span>Karta{" "}
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
