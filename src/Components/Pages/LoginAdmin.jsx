import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../features/Auth/AuthContext";
import requests from "../../Request";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const LoginAdmin = () => {
  const [movies, setMovies] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/*");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleDelete = async () => {
    setError("");
    try {
      navigate("/*");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div onClick={handleDelete} className="flex justify-end items-center">
            <AiOutlineClose size={30} />
          </div>
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold text-center">Sign In</h1>
            {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />

              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <input className="mr-2" type="checkbox" />
                <p>Remember me</p>
                <p>Need Help?</p>
              </div>
              <div className="py-8 my-3 mx-3">
                <p>
                  <span className="text-gray-600">New to Mor?</span>
                  <span className="text-subMain"> or </span>
                  <Link to="/login" className="hover:text-teal-950">
                    Log In
                  </Link>
                </p>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
