import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HeaderAd from "./layout/HeaderAd";
import { useLocation } from "react-router-dom";
const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <div className="bg-black">
        {location.pathname.startsWith("/*") ? <HeaderAd /> : <Header />}
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
