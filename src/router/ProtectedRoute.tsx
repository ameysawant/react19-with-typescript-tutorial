import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to={"/auth"} replace={true} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
