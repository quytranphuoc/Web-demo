import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../../Request";
import Layout from "antd/es/layout/layout";
const Banner = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movie);
  return (
    <Layout>
      <div className="w-full h-[600px] text-white">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border text-white border-gray-300 py-2 px-5 ml-4 text-center">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="line-clamp-4 tex-gray-200">{movie?.overview}</p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Banner;
