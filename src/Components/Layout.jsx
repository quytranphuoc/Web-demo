import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HeaderAdmin from "./layout/HeaderAdmin";
import { useLocation } from "react-router-dom";
const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="bg-black">
      {location.pathname.startsWith("/*") ? <HeaderAdmin /> : <Header />}
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
