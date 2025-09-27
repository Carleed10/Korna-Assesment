import React, { useState } from "react";

// import { IoSearchOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { CgMenu } from "react-icons/cg";
import { navigationLinks } from "./constants";
import TemporaryDrawer from "./drawer";
import { Link } from "react-router-dom";

const Navbar = ({ onContactClick }) => {
  const [showDrawer, setshowDrawer] = useState(false);

  return (
   
   <div className="w-full top-0 h-[12vh] fixed font-semibold z-50 flex items-center justify-center bg-[rgb(252,251,255)] shadow-lg">
        <div className="w-[85%]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <h2 className='font-bold text-[13px] text-center'>HOMIQ</h2>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center md:gap-8 lg:gap-12 hidden lg:flex">
            {navigationLinks.map((data) => (
              <Link
                key={data.title}
                to={data.path}
                className="font-[500] cursor-pointer hover:text-[#1A5545] hover:transition-scale-[1.1] transition-all duration-300"
              >
                {data.title}
              </Link>
            ))}
          </ul>

          <button>Sign In</button>

            <Link to={'/signUp'}>
          <button className='bg-[rgb(39,33,98)] text-[black] text-[white] rounded-[40px] py-2 px-6'>Sign up</button>
            
            </Link>

          {/* Menu Icon for Mobile */}
          <div
            onClick={() => setshowDrawer(true)}
            className="lg:hidden text-white lg:text-black p-2 rounded-md"
          >
            <CgMenu color="black" size={24} />
          </div>
        </div>
      </div>

      {/* Drawer */}
      <TemporaryDrawer
        onClose={() => setshowDrawer(!showDrawer)}
        open={showDrawer}
      />
      </div>
    
  );
};

export default Navbar;
