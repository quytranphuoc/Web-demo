import React from "react";
import Layout from "../../Components/Layout";
import SideBar from "./Account/SideBar";


const Account = () => {
  return (
    <Layout className="bg-black">
      <div className="w-full text-white bg-black">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/*"
        />
      </div>
      <SideBar/>
    </Layout>
  );
};

export default Account;
