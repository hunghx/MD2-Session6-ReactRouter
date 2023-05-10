import React from "react";
import Home from "./Home";
import { Navigate } from "react-router-dom";

export default function CheckLogin() {
  const isLogin = true;
  return isLogin ? <Home /> : <Navigate to={"/login"} />;
}
