import Layout from "antd/es/layout/layout";
import React from "react";
import { FiUser } from "react-icons/fi";

const Content = () => {
  return (
    <Layout className="bg-black">
      <div
        className="my-20 py-10 md:px-20 px-8 border flex border-4 border-red-600 bottom-1 bg-purple-500 bg-opacity-80 shadow-lime-100 rounded-s-full"
        data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="10"
              data-aos-offset="200"
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap:9 items-center">
          <div className="flex lg:gap-10 gap-6 flex-col object-cover">
            <h1 className="capitalize line-clamp-4 ">
              Download Your Movies Watch Offline.
             Enjoy on Your Mobile
            </h1>
            <p className="text-text text-sm xl:text-base line-clamp-4">
              Lorem ipsum dolor it amet, consectur adiposcing elit. NUnc sed
            </p>
            <div className="flex gap-4 md:text-lg text-sm">
              <div className="flex flex-col justify-center items-center bg-black text-subMain px-6 py-3 rounded font-bold ">
                HD 4K
              </div>
              <div className="flex flex-row justify-center items-center gap-4 bg-black text-subMain px-6 py-3 rounded font-bold ">
                <FiUser /> 2K
              </div>
            </div>
          </div>
          <div className="w-auto h-auto" >
            <img
              src="https://netflixo.vercel.app/images/mobile.png"
              alt="Mobile app"
              border="w-full"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Content;
// className=" bottom-1 bg-purple-500 bg-opacity-80 border shadow-lime-100 rounded-s-full"