import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  function activeClick(route: string) {
    if (location.pathname === route) {
      return true;
    }
  }
  return (
    <React.Fragment>
      <div className="p-5 z-50 sticky top-0 bg-white border-b shadow-sm ">
        <header className="flex justify-between max-w-6xl mx-auto items-center px-3">
          <div>Realtor App</div>
          <div>
            <ul className="flex space-x-10">
              <li
                className={` cursor-pointer text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  activeClick("/") &&
                  "border-b-red-500 text-black font-semibold"
                }`}
              >
                <Link to="/"> Home </Link>
              </li>
              <li
                className={`cursor-pointer text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  activeClick("/offer") &&
                  "border-b-red-500 text-black font-semibold"
                }`}
              >
                <Link to="/offer"> Offer </Link>
              </li>
              <li
                className={`text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  activeClick("/profile") &&
                  "border-b-red-500 text-black font-semibold"
                }`}
              >
                <Link to="/profile">Profile</Link>
              </li>
              <li
                className={`text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  activeClick("/signin") &&
                  "border-b-red-500 text-black font-semibold"
                }`}
              >
                <Link to="/signin">Sign in</Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </React.Fragment>
  );
};

export default Header;
