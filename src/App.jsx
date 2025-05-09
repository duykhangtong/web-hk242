import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./Mazer/compiled/css/app-dark.css";
import "./Mazer/compiled/css/app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import CommunityAdminPage from "./components/community_page/CommunityAdminPage.jsx";
import { CommunityDetailPage } from "./components/community_page/CommunityDetailPage.jsx";
import CommunityPage from "./components/community_page/CommunityPage.jsx";
import ContactPage from "./components/contact_page/ContactPage.jsx";

import ContactPageAdmin from './components/contact_page/ContactPageAdmin.jsx';

import HomePage from "./components/home_page/HomePage.jsx";
import IntroPage from "./components/intro_page/IntroPage.jsx";
import AdminIntro from "./components/intro_page/adminIntro.jsx";
import ProfilePage from "./components/profile_page/UserProfilePage.jsx";
import UsersPage from "./components/users_page/UserManagementPage.jsx";

import ProductPage from "./components/Product/Product.jsx";
import ProductDetail from "./components/Product/ProductDetail.jsx";

import ProductList from "./components/Product/ProductList.jsx";
import ProductUpload from "./components/Product/ProductUpload.jsx";
import OrderManagement from './components/order/OrderManagement.jsx'
import {OrderDetail} from './components/order/OrderManagement.jsx'


import QuestionPage from "./components/question_page/questionPage.jsx";
import AdminQA from "./components/question_page/adminQA.jsx";
import QuestionDetail from "./components/question_page/questionDetail.jsx";

import AdminLayout from "./layouts/AdminLayout.jsx";
import UserLayout from "./layouts/UserLayout.jsx";

import Cart from "./components/Cart/Cart.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/login/Register.jsx";

import Cart from "./components/Cart/Cart.jsx";
import ProductUpdate from "./components/Product/ProductUpdate.jsx";
import HistoryCart from "./components/Cart/HistoryCart.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/historycart" element={<HistoryCart />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/detail/:productId" element={<ProductDetail />} />
          <Route path="/introduction" element={<IntroPage />} />

          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:id" element={<CommunityDetailPage />} />

          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<ProfilePage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/products/update/:id" element={<ProductUpdate />} />
          <Route path="/admin/products/list" element={<ProductList />} />
          <Route path="/admin/products/upload" element={<ProductUpload />} />

          <Route path="/admin/community" element={<CommunityAdminPage />} />

          <Route path="/admin/questions" element={<AdminQA />} />
          <Route path="/admin/introduction" element={<AdminIntro />} />

          <Route path="/admin/profile" element={<ProfilePage />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/admin/contacts" element={<ContactPageAdmin />} />
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/admin/orders/:id" element={<OrderDetail />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
