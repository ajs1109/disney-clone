import React,{ useState } from "react";
import logo from "../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {

  const [toggle,setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center gap-8 justify-between px-5 py-3">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          alt="Disney "
          className="w-[80px] lg:w-[115px] object-cover "
        />
        <div className=" hidden lg:flex gap-8">
          {menu.map((item) => {
            return <HeaderItem name={item.name} Icon={item.icon} />;
          })}
        </div>
        <div className=" flex lg:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={''} Icon={item.icon} />
          )}
          <div className="lg:hidden" onClick={() => setToggle(!toggle)} >
            <HeaderItem name={""} Icon={HiDotsVertical} />
           {toggle ?  <div className="absolute mt-3 border-gray-700 p-3 bg-[#121212] border-[1px] px-5 py-4 ">
              {menu.map(
                (item, index) =>
                  index >= 3 && <HeaderItem name={item.name} Icon={item.icon} />
              )}
            </div> : null }
          </div>
        </div>
      </div>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
        alt=""
        className="w-[40px]"
      />
    </div>
  );
}

export default Header;
