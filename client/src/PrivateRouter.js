import React from "react";
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter({ children }) {
  const userInfo = useSelector((state) => state.userPanelLogin.userInfo);
  let token = 0;

  if (typeof userInfo !== 'undefined' && userInfo !== null) {
    token = userInfo.token;
  }

  return token ? children : <Navigate to="/login" />;
}

export default PrivateRouter;
