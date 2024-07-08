import React from "react";
import Banner from "../layout/HomePage/Banner";
import Row from "../layout/HomePage/Slider/Row";
import requests from "../../Request";
import Layout from "../Layout";
import Content from "../layout/HomePage/Content";
import Dashboard_Admin from "../../features/Admin/AdminPage/Dashboard_Admin";
import HeaderAd from "../layout/HeaderAd";
import SideMenu from "../../features/Admin/AdminPage/SideMenu";
import PageContent from "../../features/Admin/AdminPage/PageContent";
import Footer from "../layout/Footer";
const HomePageAdmin = () => {
  return (
    <>
      {/* <Layout>
        <Banner />
        <Row rowID={1} title="UpComing" fetchURL={requests.requestUpcoming} />
        <Row rowID={2} title="Popular" fetchURL={requests.requestPopular} />
        <Row rowID={3} title="Trending" fetchURL={requests.requestTrending} />
        <Row rowID={4} title="TopRated" fetchURL={requests.requestTopRated} />
        <Row
          rowID={5}
          title="Now playing"
          fetchURL={requests.requestNow_playing}
        />

        <Content />
      </Layout> */}
      <div className=" h-full w-full">
        <HeaderAd />
        <div className="flex flex-1 justify-start items-start bg-opacity-5 bg-black">
          <SideMenu></SideMenu>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePageAdmin;
