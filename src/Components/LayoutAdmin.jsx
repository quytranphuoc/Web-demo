import React from "react";
import Footer from "./layout/Footer";
import { useLocation } from "react-router-dom";
import HeaderAd from "./layout/HeaderAd";
const LayoutAdmin = ({ children }) => {
  const location = useLocation();
  return (
    <div className="bg-black">
      <HeaderAd />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutAdmin;
