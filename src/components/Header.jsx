import React from "react";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <div className="bg-blue-100 h-[80px] w-full flex items-center justify-around">
      <Sidebar />
      <div className="ml-3">
        <img src={logo} className="h-[60px] w-[100%]" />
      </div>
      <div>
        <div className="flex bg-white w-[500px] justify-between px-5 items-center rounded-2xl ">
          <input
            type="text"
            placeholder="Search Product"
            className=" rounded-2xl px-[10px] py-[8px]"
          />
          <button>
            <CiSearch className="text-2xl font-bold" />
          </button>
        </div>
      </div>
      <div className="h-[50px] flex font-bold ml-4">
        <img src={avatar} alt="" className="rounded-4xl" />
        <select name="Valiya Chandresh" id="">
          <option value="Chandresh">Valiya Chandresh</option>
        </select>
      </div>

      <div className="flex justify-center items-center font-bold w-[200px]">
        <a href="/" className="px-3">
          Charts
        </a>
        <a href="/" className="px-3">
          Orders
        </a>
      </div>
    </div>
  );
};

export default Header;
