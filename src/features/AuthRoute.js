import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Todo/TodoSlice";


function AuthRoute({ children }) {
  const user = useSelector(selectUser);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default AuthRoute;
