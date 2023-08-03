import React from "react";
import Banner from "../layout/HomePage/Banner";
import Row from "../layout/HomePage/Slider/Row";
import requests from "../../Request";
import Layout from "antd/es/layout/layout";
import Content from "../layout/HomePage/Content";
const HomePage = () => {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
};

export default HomePage;
