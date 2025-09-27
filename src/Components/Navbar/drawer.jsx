import { Drawer } from "@mui/material";
// import logo from "../../Images/red-logo.png";
import { Link } from "react-router-dom";
import { navigationLinks } from "./constants";
import { MdCancel } from "react-icons/md";

export default function TemporaryDrawer({ onClose, open }) {
  return (
    <div>
      <Drawer
        onClose={onClose}
        open={open}
        anchor="top"
        PaperProps={{
          sx: {
            width: "100%",
            height: "50vh", // Set the height of the Drawer to 50% of the viewport height
          },
        }}
      >
        <div
          className={`w-full h-fit p-5 bg-white text-black`}
        >
          {/* Logo and Close Button */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <Link to="/">
                    <h2 className='font-bold text-[13px] lg:text-center'>GUNBA PROPERTIES </h2>
              </Link>
            </div>
            <div className="cursor-pointer" onClick={onClose}>
              <MdCancel size={25} />
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="grid w-full mt-6">
            {navigationLinks.map((data, index) => (
              <li className="w-full p-2 cursor-pointer" key={index}>
                <Link
                  onClick={onClose}
                  className="font-semibold text-md text-black hover:text-orange-500 hover:underline transition-all duration-300"
                  to={data.path}
                >
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
}
