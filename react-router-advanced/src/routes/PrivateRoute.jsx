import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

function PrivateRoute({ children }) {
  return isAuthenticated()
    ? children
    : <Navigate to="/login" />;
}

export default PrivateRoute;
