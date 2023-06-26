import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.userData.status === "Logged"
  );

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
