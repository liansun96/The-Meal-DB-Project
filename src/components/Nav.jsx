import { ImSearch } from "react-icons/im";
import { FaRandom } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import {MdOutlineBookmarks} from 'react-icons/md'
import { Link, NavLink } from "react-router-dom";
import foodieLogo from "../images/logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <div className="flex justify-between items-center font-Ubt">
        <div className="w-40%">
          <Link to="/">
            <div className="flex items-center gap-4 my-8">
              <img src={foodieLogo} className="w-20" alt="" />
              <h1 className="font-semibold tracking-wide text-4xl ">Meals O'clock</h1>
            </div>
          </Link>
        </div>
        <ul className="w-[50%] px-4 flex justify-between items-center">
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
    </>
  );
};

export default Nav;
