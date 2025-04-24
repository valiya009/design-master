import React, { useState } from "react";
import { HiMiniBars4 } from "react-icons/hi2";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { GrUserManager } from "react-icons/gr";
import { TbDeviceTvOld } from "react-icons/tb";
import { RiSofaLine } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { FaKitchenSet, FaGift } from "react-icons/fa6";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 text-4xl bg-blue-100 p-2 rounded shadow">
        <HiMiniBars4 />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-100 text-black w-20 transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <nav className="flex flex-col p-4 space-y-2 justify-center items-center mt-15">
          {[
            <FcBusinessman />,
            <FcBusinesswoman />,
            <GrUserManager />,
            <TbDeviceTvOld />,
            <RiSofaLine />,
            <IoGameController />,
            <FaKitchenSet />,
            <FaGift />,
          ].map((icon, index) => (
            <a
              href="#"
              key={index}
              className="hover:bg-blue-200 p-2 rounded text-4xl transition-all duration-300 transform hover:scale-110">
              {icon}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
