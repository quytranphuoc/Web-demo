import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "antd";
import { BsFillGiftFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { RiLockPasswordLine, RiMovie2Fill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { UserAuth } from "../../Auth/AuthContext";

const SideMenu = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/*");
  const { user } = useContext(UserAuth);

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  const [query, setQuery] = useState("");
  const [result, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="h-full">
      <Menu mode="vertical" selectedKeys={[selectedKeys]}>
        <Menu.Item key="/dashboard" icon={<BsFillGiftFill />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="/admin/addmovie" icon={<RiMovie2Fill />}>
          Add Movie
        </Menu.Item>
        <Menu.Item key="/admin/movieslist" icon={<FaListAlt />}>
          Movies List
        </Menu.Item>
        <Menu.Item key="/admin/categories" icon={<HiViewGridAdd />}>
          Categories
        </Menu.Item>
        <Menu.Item key="/admin/users" icon={<HiViewGridAdd />}>
          Users
        </Menu.Item>
        <Menu.Item key="/admin/password" icon={<RiLockPasswordLine />}>
          Change Password
        </Menu.Item>
      </Menu>
      
    </div>
  );
};

export default SideMenu;
