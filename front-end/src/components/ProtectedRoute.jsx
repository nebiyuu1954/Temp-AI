import { Navigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRoute = ({ children, requireUserMatch = false, requiredRole = null }) => {
  const { user, tokens } = useContext(AuthContext);
  const { id } = useParams();

  if (!tokens) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  if (requireUserMatch && id && user?.id?.toString() !== id) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};
