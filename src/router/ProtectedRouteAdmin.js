import React from "react";
import { UserAuth } from "../features/Auth/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRouteAdmin = ({children}) => {
  // const { currentUser } = UserAuth();
  const {user} = UserAuth();

  return user ? children  : <Navigate to="/login-admin" />;

  // if (!user) {
  //   return <Navigate to="/*" />;
  // } else {
  //   return Children;
  // } else {
  //   return currentUser ? <Outlet/>: <Navigate to="/login-admin" />;
  }

;

export default ProtectedRouteAdmin;
