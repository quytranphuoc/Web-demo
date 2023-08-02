import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import requests from "../../Request";
import { UserAuth } from "../../features/Auth/AuthContext";
import { AiOutlineClose } from "react-icons/ai";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Button, Input, Checkbox } from "antd";

const Login = () => {
  const [movies, setMovies] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const handleDelete = () => {
    setError("");
    try {
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
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
        <div className="max-w-[540px] h-[600px] mx-auto bg-black/75 text-white">
          <div onClick={handleDelete} className="flex justify-end items-center">
            <AiOutlineClose size={30} className="hover:bg-black" />
          </div>
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="font-bold text-center">Sign In</h1>
            <Form
              name="normal_login"
              className="login-form w-full flex flex-col py-4"
              initialValues={{
                remember: true,
              }}
              onFinish={handleSubmit}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  className="p-3 my-2 rouded"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  className="p-3 my-2 rouded"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item className="flex justify-between items-center text-sm text-gray-600" >
                <Form.Item name="remember" valuePropName="checked" noStyle >
                  <Checkbox ><h3 className="text-white">Remember me</h3></Checkbox>
                </Form.Item>

                <a className="login-form-forgot text-white   " href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-btn-primary"
                >
                  Log in
                </Button> <br/>
                 <a href="/signup" className="text-white">Register now!</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
