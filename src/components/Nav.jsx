import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { FaRandom } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { CgMenuRight } from "react-icons/cg";
import {MdOutlineBookmarks} from 'react-icons/md'
import { Link, NavLink } from "react-router-dom";
import foodieLogo from "../images/logo.png";
import "./Nav.css";
import MobileMenu from "./MobileMenu";

const Nav = () => {

  const [show, setShow] = useState(false);

  const handleToggle = () => setShow((pre) => !pre);

  return (
    <>
      <div className="flex justify-between items-center mx-2 my-5 lg:my-0 font-Ubt">
        <div className="w-[70%] lg:w-[50%]">
          <Link to="/">
            <div className="flex items-center gap-4 lg:my-8">
              <img src={foodieLogo} className="w-16 lg:w-20" alt="" />
              <h1 className="font-semibold tracking-wide text-2xl lg:text-4xl ">Meals O'clock</h1>
            </div>
          </Link>
        </div>
        <div className="w-[30%] lg:w-[50%]">
          <button
            className="relative z-10 block lg:hidden ml-auto"
            onClick={handleToggle}
          >
            <CgMenuRight className="text-3xl" />
            <MobileMenu toggle={show} />
          </button>
          <div className="hidden lg:block">
            <ul className="px-4 flex justify-between items-center">          
              <NavLink to="/">
                <li className="flex space-x-4 items-center">
                  <TiHome className="text-2xl" /> 
                  <p>Home</p>
                </li>
              </NavLink>
              <NavLink to="/searchbyname">
                <li className="flex space-x-4 items-center">
                  <ImSearch className="text-xl" />
                  <p>Search</p>
                </li>
              </NavLink>
              <NavLink to="/randommeal">
                <li className="flex space-x-4 items-center">
                  <FaRandom className="text-xl" />
                  <p>Random Meal</p>
                </li>
              </NavLink>
              <NavLink to="/bookmarks">
                <li className="flex space-x-4 items-center">
                  <MdOutlineBookmarks className="text-2xl" />
                  <p>Bookmark</p>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
