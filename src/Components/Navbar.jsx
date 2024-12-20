import React from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="w-11/12 max-w-[1160px] mx-auto flex flex-row justify-between items-center py-4">
      {/* Logo */}
      <div>
        <Link to="/">
         <h2 className="bg-gradient-to-r from-green-700 to-lime-500 bg-clip-text text-transparent font-serif font-bold text-[1.8rem] ">CHILD MIND WELL</h2>
          {/* <img src={Logo} alt="Logo" height={32} width={160} loading="lazy" /> */}
        </Link>
      </div>

      <nav>
        <ul className="flex gap-x-6 text-richblack-25">
          <li>
            <Link to="/" className=" text-[1.2rem] font-mono hover:bg-blue-700 rounded-lg px-3 py-1 text-white">Home</Link>
          </li>
          <li>
            <Link to="/about" className=" text-[1.2rem] font-mono hover:bg-blue-700 rounded-lg px-3 py-1 text-white">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-[1.2rem] font-mono hover:bg-blue-700 rounded-lg px-3 py-1 text-white">Contact</Link>
          </li>
          
        </ul>
      </nav>

      {/* Button Group  */}
      <div className="flex items-center gap-x-4 text-richblack-100">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 font-mono">Log in</button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 font-mono">Sign up</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={() => {
              setIsLoggedIn(false)
              toast.success("Logged out");
            }}>Log out</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
