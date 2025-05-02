import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminProducts from "./pages/admin-view/product";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import Notfound from "./pages/not-fount";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingCheckout from "./pages/shopping-view/checkout";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Headder</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/Admin" element={<AdminLayout />}>
          <Route path="products" element={<AdminProducts />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="*" element={<Notfound />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="home" element={<ShoppingHome />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
