import React from "react";
import { Navigate } from "react-router-dom";

const GuardedRoute = ({
  component: Component,
  failNavigate,
  auth,
  ...props
}) => {
  return auth === true ? (
    <Component {...props} />
  ) : (
    <Navigate to={failNavigate} replace />
  );
};

export default GuardedRoute;
