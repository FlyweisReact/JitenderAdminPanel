/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import MSG from "./components/vendorPanel/components/pages/Message/Message";
import "react-toastify/dist/ReactToastify.css";
import UserKundli from "./components/pages/UserKundli/UserKundli";
import Discount from "./components/pages/discount/Discount";
import VendorLogin from "./components/vendorPanel/components/forms/VendorLogin";
import VendorDashboard from "./components/vendorPanel/components/pages/VendorDashboard";
import Fedd from "./components/pages/FeedBack/Fedd";
import Users from "./components/vendorPanel/components/pages/Users/Users";
import TimeSlots from "./components/pages/TimeSlots/TimeSlots";
import Product from "./components/vendorPanel/components/pages/Products/Product";
import Category from "./components/vendorPanel/components/pages/Category/Category";
import Order from "./components/vendorPanel/components/pages/Orders/Order";
import Ban from "./components/vendorPanel/components/pages/Ban/Ban";
import Coupon from "./components/vendorPanel/components/pages/Coupon/Coupon";
import Complaint from "./components/vendorPanel/components/pages/Complaint/Complaint";
import Vendor from "./components/vendorPanel/components/pages/Vendors/Vendor";
import Privacy from "./components/vendorPanel/components/pages/Products/Privacy";


function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/vendorLogin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userkundli" element={<UserKundli />} />
        <Route path="feedback" element={<Fedd />} />
        <Route path="/time" element={<TimeSlots />} />
        <Route path="/discount" element={<Discount />} />

        
        {/* Admin Panel */}
        <Route path="/" element={<VendorLogin />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/ven" element={<Vendor />} />
        <Route path="/users" element={<Users />} />
        <Route path="/ban" element={<Ban />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/msg" element={<MSG />} />
        <Route path="/dis" element={<Coupon />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/order" element={<Order />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/term' element={<Ter}
      </Routes>
    </>
  );
}

export default App;
