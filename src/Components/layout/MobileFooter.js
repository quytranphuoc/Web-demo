import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { BsCollection, BsCollectionPlay } from "react-icons/bs";
import { CgMenuBoxed } from "react-icons/cg";
import { FiHeart, FiUserCheck } from "react-icons/fi";
import { NavLink } from "react-router-dom";
function MobileFooter() {
  return (
    <div>
      <div className="flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full"></div>
      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
        <div className="bg-dry rounded-md flex-btn w-full p-1">
          <NavLink to="/movies" className={hover}>
            <BsCollectionPlay />
          </NavLink>
          <NavLink to="/favorites" className={hover}>
            <div className="relative">
              <div className="w-5 h-5 flxe-colo rounded-full bg-subMain text-white absolute -top-5 -right-1">
                3
              </div>
              <FiHeart />
            </div>
          </NavLink>
          <NavLink to="/login">
            <FiUserCheck />
          </NavLink>
          <button>
            <CgMenuBoxed />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default MobileFooter;
