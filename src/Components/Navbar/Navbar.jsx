import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  return (
    <>
      <header className="w-full bg-[white] border-b border-[rgb(244,244,244)] flex items-center fixed top-0 z-50 justify-between px-8 py-4 border-b">
        <div className="flex items-center space-x-6">

            <RxHamburgerMenu />
          <h1 className="text-2xl font-bold">Medium</h1>
          <div className="flex items-center hidden md:flex bg-[rgb(244,244,244)] rounded-full px-3 py-2">
            {/* <Search className="w-4 h-4 text-gray-500" /> */}
            <CiSearch />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 bg-[rgb(244,244,244)]  outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* <Button>Write</Button> */}
          <p className="flex hidden md:flex items-center gap-2">
            <TfiWrite size={20}/>
            Write
          </p>
          <span className="flex md:hidden">
            <CiSearch size={22} />

          </span>
            <span className="hidden md:flex">
          <IoNotificationsOutline size={20}/>

            </span>
          <div className="w-8 h-8 rounded-full bg-black"></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
