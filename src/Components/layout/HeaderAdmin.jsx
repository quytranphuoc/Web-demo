import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import HeroImg from "../../assets/logo.webp";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import { UserAuth } from "../../features/Auth/AuthContext";
const HeaderAdmin = () => {
  const { user, logOut } = UserAuth();
  // const {currentUser, logOut} = UserAuth();
  const [nav, setNav] = useState(false);

  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  const handleNav = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/*");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-[90px] bg-purple-500 bg-opacity-80">
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
        <Link to="/*admin">
          <img src={HeroImg} alt="logo" className="w-20" size="40" />
        </Link>
        {/* Account */}
        {user?.email ? (
          <div>
            <div className="flex flex-wrap items-center justify-center">
              <ul className="flex text-white items-center">
                <NavLink to="/*movies" className={Hover}>
                  <li>Movie</li>
                </NavLink>
                <NavLink to="/*about-us" className={Hover}>
                  <li>About Us</li>
                </NavLink>
                <NavLink to="/*contact-us" className={Hover}>
                  <li>Contact Us</li>
                </NavLink>
                <NavLink to="/dashboard">
                  <div className="text-blue-600 text-center items-end hover:text-subMain hover:scale-110">
                    <MdAdminPanelSettings
                      className="flex flex-wrap items-center justify-center w-full hover:text-subMain"
                      size={30}
                    />
                    Dashboard
                  </div>
                </NavLink>
                <button onClick={handleLogout} className="hover:shadow-md hover:scale-110">LogOut</button>
              </ul>
            </div>
            <div onClick={handleNav} className="block md:hidden">
              {nav ? (
                <AiOutlineClose size={30} className="text-white" />
              ) : (
                <AiOutlineMenu size={30} className="text-white" />
              )}
            </div>
            {/* {Mobile Menu} */}
            <div
              className={
                nav
                  ? "w-full bg-purple-500 bg-opacity-80 text-white absolute top-[90px] left-0 flex justify-center text-center"
                  : "absolute left-[-100%]"
              }
            >
              <ul>
                <li className="text-2xl">PLatform</li>
                <li className="text-2xl">Developers</li>
                <li className="text-2xl">Community</li>
                <li className="text-2xl">About</li>
                <NavLink to="/login">
                  <button>Sign In</button>
                </NavLink>
                <NavLink to="/signup">
                  <button>Sign Up</button>
                </NavLink>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <div className="hidden md:flex">
              <ul className="flex text-white items-center">
                <NavLink to="/about-us" className={Hover}>
                  <li>About Us</li>
                </NavLink>
                <NavLink to="/contact-us" className={Hover}>
                  <li>Contact Us</li>
                </NavLink>
                <NavLink to="/login">
                  <button>Sign In</button>
                </NavLink>
                <NavLink to="/signup">
                  <button>Sign Up</button>
                </NavLink>
                {/* <NavLink to="/dashboard">
                  <button>Dashboard</button>
                </NavLink> */}
              </ul>
            </div>
            {/* {Hambuger menu} */}
            <div onClick={handleNav} className="block md:hidden">
              {nav ? (
                <AiOutlineClose size={30} className="text-white" />
              ) : (
                <AiOutlineMenu size={30} className="text-white" />
              )}
            </div>
            {/* {Mobile Menu} */}
            <div
              className={
                nav
                  ? "w-full bg-purple-500 bg-opacity-80 text-white absolute top-[90px] left-0 flex justify-center text-center"
                  : "absolute left-[-100%]"
              }
            >
              <ul>
                <li className="text-2xl">PLatform</li>
                <li className="text-2xl">Developers</li>
                <li className="text-2xl">Community</li>
                <li className="text-2xl">About</li>
                <NavLink to="/login">
                  <button>Sign In</button>
                </NavLink>
                <NavLink to="/signup">
                  <button>Sign Up</button>
                </NavLink>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderAdmin;
