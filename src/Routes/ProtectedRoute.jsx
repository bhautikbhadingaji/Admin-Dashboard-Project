import { Navigate, Outlet } from "react-router-dom";

  export const ProtectedRoute = () => {
      const isAuthenticated = localStorage.getItem("user")

       return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
    }
