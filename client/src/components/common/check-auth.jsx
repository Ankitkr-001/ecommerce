import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({isAuthenticated, user, children}) {
  const location = useLocation();

//   if (!user) {
//     return <Navigate to="/auth/login" />;
//   }
  if (
    !(isAuthenticated) &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to={"/auth/login"} />;
  }
  if (
    isAuthenticated &&
    (location.pathname.includes("login") ||
      location.pathname.includes("register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to={"/admin/dashboard"} />;
    } else {
      return <Navigate to={"/shop/home"} />;
    }
  }
  if (
    isAuthenticated &&
    location.pathname.includes("/admin") &&
    user.role !== "admin"
  ) {
    return <Navigate to={"/unauth-page"} />;
  }
  if (
    isAuthenticated &&
    location.pathname.includes("/shop") &&
    user?.role === "admin"
  ) {
    return <Navigate to={"/admin/dashboard"} />;
  }
  return <> {children}</>;
}

export default CheckAuth;
