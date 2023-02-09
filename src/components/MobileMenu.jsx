import React from "react";
import { ImSearch } from "react-icons/im";
import { FaRandom } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import {MdOutlineBookmarks} from 'react-icons/md';
import { NavLink } from "react-router-dom";

const MobileMenu = ({ toggle }) => {          
 
  return (
    <div className={toggle ? "menu scale-y-1" : "menu scale-y-0"}>
      <div className="flex flex-col justify-center items-center my-3 space-y-7">
        <div className="w-[90%] flex space-x-2 justify-center items-center rounded">
          <NavLink to="/">
            <div className="flex space-x-6 items-center">
              <TiHome className="text-2xl" /> 
              <p>Home</p>
            </div>
          </NavLink>
        </div>
        <div className="w-[90%] flex space-x-2 justify-center items-center rounded">
          <NavLink to="/searchbyname">
            <div className="flex space-x-6 items-center">
              <ImSearch className="text-xl" />
              <p>Search</p>
            </div>
          </NavLink>
        </div>
        <div className="w-[90%] flex space-x-2 justify-center items-center rounded">
          <NavLink to="/randommeal">
            <div className="flex space-x-6 items-center">
              <FaRandom className="text-xl" />
              <p>Random Meal</p>
            </div>
          </NavLink>
        </div>
        <div className="w-[90%] flex space-x-2 justify-center items-center rounded">
          <NavLink to="/bookmarks">
            <div className="flex space-x-6 items-center">
              <MdOutlineBookmarks className="text-2xl" />
              <p>Bookmark</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
